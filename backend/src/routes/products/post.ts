import { FastifyReply, FastifyInstance, FastifyRequest } from 'fastify'
import { insertProductschema, products } from '../../db/schemas/products'
import { db } from '../../db/database'
import { pipeline } from 'stream/promises'
import fs from 'fs'
import path from 'path'
import createId from '../../libs/idGen'

interface CreateProductBody {
  title: string
  description: string
  price: number
}

export default async function post(app: FastifyInstance) {
  app.post(
    '/products',
    async (
      req: FastifyRequest<{ Body: CreateProductBody }>,
      reply: FastifyReply
    ) => {
      try {
        const parts = req.parts()

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = {}

        let uploadedFileName: string | null = null

        const uploadDir = path.join(process.cwd(), 'uploads')

        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir)
        }

        for await (const part of parts) {
          if (part.type === 'file') {
            uploadedFileName = `${Date.now()}-${createId()}-${part.filename}`
            const filePath = path.join(uploadDir, uploadedFileName)
            await pipeline(part.file, fs.createWriteStream(filePath))
            data['image'] = uploadedFileName
          } else {
            data[part.fieldname] = part.value
          }
        }
        const productDate = await insertProductschema.parseAsync(data)

        const [insertProduct] = await db
          .insert(products)
          .values({
            id: productDate.id,
            title: productDate.title,
            description: productDate.description,
            image: productDate.image,
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
