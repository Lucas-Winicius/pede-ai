import { app } from '../../server'
import forgotPassword from './forgotPassword'
import post from './post'
import recoverPassword from './recoverPassword'

export default async function UserRoutes() {
  app.register(post)
  app.register(forgotPassword)
  app.register(recoverPassword)
}
