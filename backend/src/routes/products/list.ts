import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import { products } from '../../db/schemas/products'
import { db } from '../../db/database'
import { ilike, and } from 'drizzle-orm'

interface Query {
  title?: string
}

export default async function list(app: FastifyInstance) {
  app.get(
    '/products',
    async (
      req: FastifyRequest<{ Querystring: Query }>,
      reply: FastifyReply
    ) => {
      try {
        const { title } = req.query

        const conditions = []

        if (title && title.trim() !== '') {
          conditions.push(ilike(products.title, `%${title.trim()}%`))
        }

        const searchProducts = await db
          .select()
          .from(products)
          .where(conditions.length ? and(...conditions) : undefined)

        return reply.code(200).send({
          status: 200,
          message: 'Pesquisa realizada',
          data: searchProducts,
        })
      } catch (e) {
        console.log(e)
        reply.code(400).send({
          status: 400,
          message: 'Erro ao pesquisar produto',
          data: e,
        })
      }
    }
  )
}
