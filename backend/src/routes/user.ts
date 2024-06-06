import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        prismaClient: PrismaClient
    }
}>();

userRouter.use('/*', async (c, next) => {
    console.log("Inside middleware")
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL, 
    }).$extends(withAccelerate()) ;
    // @ts-ignore
    c.set('prismaClient', prisma);
    await next()
  })



userRouter.post('/signup', async (c) => {
    const prisma = c.get('prismaClient');
    const body = await c.req.json();
    console.log('prisma body')
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      c.status(200);
      return c.json({ jwt });
    } catch (e) {
      c.status(403);
      return c.json({ error: "error while signing up: " + e });
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
    const prisma = c.get('prismaClient');
    
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
    if(!user) {
      c.status(403);
      return c.json({error: "user not found"});
    }
    console.log(user.id);
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    c.status(200);
    return c.json({ jwt });
  
  })