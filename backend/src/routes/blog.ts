import { createBlogInput } from "@kartikhub/blog-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string,
        prismaClient: PrismaClient
    }
}>();


blogRouter.use('/*', async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    // @ts-ignore
    c.set('prismaClient', prisma);

    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    const authType = jwt.split(' ')[0];
    if (authType != 'Bearer') {
        c.status(401)
        return c.json({ error: "Unauthorized" });
    }
    const token = jwt.split(' ')[1];
    try {
        const payload = await verify(token, c.env.JWT_SECRET)
        c.set('userId', payload.id as string);
        await next();
    } catch (e) {
        c.status(401)
        return c.json({ error: "unauthorized" });
    }


})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Input details are incorrect"
        })
    }
    const prisma = c.get('prismaClient');
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId')
            }
        })
        c.status(200);
        return c.json({
            id: post.id,
        });
    } catch (e) {
        c.status(411);
        return c.json({
            error: "error while creating the blog post "
        })
    }
})
    .put(async (c) => {
        const body = await c.req.json();
        const { success } = createBlogInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Input details are incorrect"
            })
        }
        const prisma = c.get('prismaClient');
        try {
            const update = await prisma.post.update({
                where: {
                    id: body.id,
                    authorId: c.get('userId')
                },
                data: {
                    title: body.title,
                    content: body.content,
                    authorId: c.get('userId')
                }
            })
            c.status(200);
            return c.json({ update });
        } catch (e) {
            c.status(411);
            return c.json({
                error: "error while creating the blog post"
            })
        }
    })

// TODO: Pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = c.get('prismaClient');

    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
                title: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        c.status(200);
        return c.json({
            posts
        });
    } catch (e) {
        c.status(411);
        return c.json({
            error: "Unable to fetch the blog"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id')
    const prisma = c.get('prismaClient');

    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                content: true,
                title: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        c.status(200);
        return c.json({
            post
        });
    } catch (e) {
        c.status(411);
        return c.json({
            error: "Unable to fetch the blog post"
        })
    }
})

