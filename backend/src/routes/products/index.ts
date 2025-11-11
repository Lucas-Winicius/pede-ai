import { app } from '../../server'
import post from './post'

export default async function ProductsRoutes() {
  app.register(post)
}
