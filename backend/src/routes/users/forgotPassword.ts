import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import { forgotPasswordUserSchema, users } from '../../db/schemas/users'
import { db } from '../../db/database'
import forgotPasswordSchema from './forgotPassword.schema'
import { eq } from 'drizzle-orm'
import email from '../../libs/email'
import cache from '../../db/cache'
import createId from '../../libs/idGen'

interface RecoverUserPasswordBody {
  email: string
}

export default async function forgotPassword(app: FastifyInstance) {
  app.post(
    '/forgotPassword',
    {
      schema: forgotPasswordSchema,
    },
    async (
      req: FastifyRequest<{ Body: RecoverUserPasswordBody }>,
      reply: FastifyReply
    ) => {
      try {
        const emailData = await forgotPasswordUserSchema.parseAsync(req.body)

        const [userData] = await db
          .select({
            id: users.id,
            name: users.name,
            email: users.email,
          })
          .from(users)
          .where(eq(users.email, emailData.email))

        const passwordToken = `${createId()}-${createId()}-${createId()}-${createId()}-${createId()}`

        cache.set(
          passwordToken,
          JSON.stringify(userData),
          1800
        )

        if (userData) {
          email.sendMail({
            from: '"Pede.Ai" <pedeai@winicius.xyz>',
            to: userData.email!,
            subject: 'Troca de senha',
            html: `
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recuperação de senha</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 100dvw;
        background-color: rgb(238, 238, 238);
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      main {
        margin: 0px 20px;
        margin-top: 10dvh;
        background-color: white;
        height: max-content;
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px;
        box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.178);
      }

      main > h1 {
        text-align: center;
      }

      main > button {
        padding: 10px 30px;
        font-weight: bold;
        background-color: rgb(0, 180, 0);
        border: none;
        border-radius: 5px;
        color: white;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Recuperação de senha</h1>
      <p>Olá <strong>${userData.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .join(' ')}</strong>,</p>
      <p>Recebemos uma solicitação para redefinir sua senha de acesso à sua conta no <strong>Pede.ai</strong>.</p>
      <p>Se você realmente fez essa solicitação, clique no botão abaixo para criar uma nova senha</p>
      <p>Este link é válido por <strong>30 minutos</strong>. Após esse período, será necessário solicitar novamente a recuperação.</p>
      <p>Caso você <strong>não tenha solicitado</strong> a alteração, nenhuma ação é necessária — sua conta permanece segura.</p>
      <button>Recuperar senha</button>
    </main>
  </body>
</html>`,
          })
        }

        reply.send('email de recuperação enviado')
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
