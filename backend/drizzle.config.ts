import 'dotenv'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schemas/**/*.ts',
  out: './src/db/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
