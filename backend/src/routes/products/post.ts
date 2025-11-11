import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import postSchema from './post.schema'
import { insertProductschema, products } from '../../db/schemas/products'
import { db } from '../../db/database'

interface CreateProductBody {
  title: string
  description: string
  price: number
}

export default async function post(app: FastifyInstance) {
  app.post(
    '/products',
    {
      schema: postSchema,
    },
    async (
      req: FastifyRequest<{ Body: CreateProductBody }>,
      reply: FastifyReply
    ) => {
      try {
        const productDate = await insertProductschema.parseAsync(req.body)

        const insertProduct = await db
          .insert(products)
          .values({
            id: productDate.id,
            title: productDate.title,
            description: productDate.description,
            price: productDate.price,
          })
          .returning()

        return reply.code(201).send({
          status: 201,
          message: 'Produto criado com sucesso',
          data: insertProduct,
        })
      } catch (e) {
        reply.code(400).send({
          status: 400,
          message: 'Erro ao criar produto',
          data: e,
        })
      }
    }
  )
}
