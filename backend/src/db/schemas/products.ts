import {
  char,
  pgTable,
  real,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'
import createId from '../../libs/idGen'
import { capitalize } from '../../libs/generic'

export const products = pgTable('products', {
  id: char('id', { length: 12 }).primaryKey().notNull(),
  title: varchar('title').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => new Date())
    .defaultNow(),
})

export const insertProductschema = createInsertSchema(products, {
  id: z.string().transform(createId).default(createId),
  title: z
    .string()
    .trim()
    .min(5)
    .max(255)
    .transform((name) => capitalize(name)),
  description: z.string().trim(),
  price: z.number(),
})
