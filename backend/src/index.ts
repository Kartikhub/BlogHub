import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }, 
  Variables : {
		userId: string,
    prismaClient: PrismaClient
	}
}>()


app.use('/*', async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL , 
  }).$extends(withAccelerate()) ;
  // @ts-ignore
  c.set('prismaClient', prisma);
  await next()
})

app.use('/api/v1/blog/*', async (c, next) => {
  const jwt = c.req.header('Authorization');
  if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
  const authType = jwt.split(' ')[0];
  if(authType != 'Bearer') {
    c.status(401)
    return c.json({ error: "Unauthorized" });
  } 
  const token = jwt.split(' ')[1];
  const payload = await verify(token, c.env.JWT_SECRET)
  if(!payload) {
    c.status(401)
    return c.json({ error: "unauthorized" });
  }
  c.set('userId', payload.id as string);
  await next();
})



app.post('/api/v1/user/signup', async (c) => {
  const prisma = c.get('prismaClient');

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      }
    })
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt });
  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signing up: " + e });
  }
})


app.post('/api/v1/user/signin', async (c) => {
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
  return c.json ({ jwt });

})

app.post('/api/v1/blog', (c) => {
  console.log(c.get('userId'));
	return c.text('signin route')
})
  .put((c) => {
    return c.text('PUT blog')
  })

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.text('id : ' + id)
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Bulk')
})

export default app
