import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'
import 'dotenv'
import { users } from './schemas/users'
import { products } from './schemas/products'
import { images } from './schemas/images'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const db = drizzle(pool, {
  schema: { ...users, ...products, ...images },
})
