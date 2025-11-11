import { app } from '../server'
import ProductsRoutes from './products'
import UserRoutes from './users'

export default async function routes() {
  app.register(UserRoutes)
  app.register(ProductsRoutes)
}
