import { app } from '../../server'
import forgotPassword from './forgotPassword'
import post from './post'

export default async function UserRoutes() {
  app.register(post)
  app.register(forgotPassword)
}
