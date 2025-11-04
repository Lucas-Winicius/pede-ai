import { app } from '../server'
import UserRoutes from './users'

export default async function routes() {
  app.register(UserRoutes)
}
