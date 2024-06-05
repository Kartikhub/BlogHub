import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();


blogRouter.use('/api/v1/blog/*', async (c, next) => {
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
    const payload = await verify(token, c.env.JWT_SECRET)
    if (!payload) {
        c.status(401)
        return c.json({ error: "unauthorized" });
    }
    c.set('userId', payload.id as string);
    await next();
})

blogRouter.post('/', (c) => {
    console.log(c.get('userId'));
    return c.text('signin route')
})
    .put((c) => {
        return c.text('PUT blog')
    })

blogRouter.get('/:id', (c) => {
    const id = c.req.param('id')
    return c.text('id : ' + id)
})

blogRouter.get('/bulk', (c) => {
    return c.text('Bulk')
})