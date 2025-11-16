import fastify from 'fastify'
import 'dotenv/config'
import routes from './routes'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import swaggerConf from './config/swagger.config'
import corsOptions from './config/cors.config'
import fastifyMultipart from '@fastify/multipart'

const port = parseInt(process.env.PORT || '3000')

export const app = fastify({
  bodyLimit: 100 * 1024 * 1024,
})

app.register(fastifyMultipart, {
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB
  },
})
app.register(cors, corsOptions)
app.register(swagger, swaggerConf)
app.register(routes)

app.register(swaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject) => {
    return swaggerObject
  },
  transformSpecificationClone: true,
})

app.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening on`, address)
})
