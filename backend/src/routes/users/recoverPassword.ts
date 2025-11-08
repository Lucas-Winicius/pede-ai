import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import { recoverPasswordUserSchema, users } from '../../db/schemas/users'
import { db } from '../../db/database'
import recoverPasswordSchema from './recoverPassword.schema'
import { eq } from 'drizzle-orm'
import email from '../../libs/email'
import cache from '../../db/cache'
import createId from '../../libs/idGen'

interface RecoverUserPasswordBody {
  password: string
  tokenPassword: string
}

export default async function recoverPassword(app: FastifyInstance) {
  app.post(
    '/recoverPassword',
    {
      schema: recoverPasswordSchema,
    },
    async (
      req: FastifyRequest<{ Body: RecoverUserPasswordBody }>,
      reply: FastifyReply
    ) => {
      try {
        const passwordData = await recoverPasswordUserSchema.parseAsync(
          req.body
        )

        const userData = JSON.parse((await cache.get(passwordData.token)) || '{}')

        const [dataUpdated] = await db
          .update(users)
          .set({ password: passwordData.password.hash })
          .where(eq(users.id, userData.id))
          .returning()

        if (dataUpdated) {
          cache.delete(passwordData.token)
          return reply.code(204).send()
        } else
          return reply.status(404).send({
            status: 404,
            message: 'Erro ao recuperar senha de usuario',
          })
      } catch (e) {
        console.log(e);
        reply.code(400).send({
          status: 400,
          message: 'Erro ao recuperar senha de usuario',
          data: e,
        })
      }
    }
  )
}
