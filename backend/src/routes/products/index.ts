import { app } from '../../server'
import list from './list'
import post from './post'

export default async function ProductsRoutes() {
  app.register(post)
  app.register(list)
}
