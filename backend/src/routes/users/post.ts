import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import postSchema from './post.schema'
import { insertUserSchema, users } from '../../db/schemas/users'
import { db } from '../../db/database'

interface CreateUserBody {
  name: string
  email: string
  password: string
}
export default async function post(app: FastifyInstance) {
  app.post(
    '/users',
    {
      schema: postSchema,
    },
    async (
      req: FastifyRequest<{ Body: CreateUserBody }>,
      reply: FastifyReply
    ) => {
      try {
        const userDate = await insertUserSchema.parseAsync(req.body)

        const insertUser = await db
          .insert(users)
          .values({
            id: userDate.id,
            name: userDate.name,
            email: userDate.email,
            password: userDate.password.hash!,
            role: 'user',
          })
          .returning({
            id: users.id,
            name: users.name,
            role: users.role,
          })

        return reply.code(201).send({
          status: 201,
          message: 'Usuario criado com sucesso',
          data: insertUser,
        })
      } catch (e) {
        reply.code(400).send({
          status: 400,
          message: 'Erro ao criar usuario',
          data: e,
        })
      }
    }
  )
}
