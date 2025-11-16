import { char, pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'
import createId from '../../libs/idGen'
import { capitalize } from '../../libs/generic'
import hash from '../../libs/hash'

export const rolesEnum = pgEnum('role', ['user', 'admin'])

export const users = pgTable('users', {
  id: char('id', { length: 12 }).primaryKey().notNull(),
  role: rolesEnum(),
  name: varchar('username').notNull(),
  email: varchar('email').unique(),
  address: varchar('address'),
  password: varchar('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .defaultNow(),
})

export const insertUserSchema = createInsertSchema(users, {
  id: z.string().transform(createId).default(createId),
  name: z
    .string()
    .trim()
    .min(3)
    .transform((name) => capitalize(name)),
  email: z.string().trim().toLowerCase().email(),
  address: z.string().trim(),
  password: z.string().nonempty().trim().transform(hash),
})

export const forgotPasswordUserSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
})

export const recoverPasswordUserSchema = z.object({
  token: z.string().trim(),
  password: z.string().nonempty().trim().transform(hash),
})
