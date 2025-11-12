import { char, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'
import createId from '../../libs/idGen'
import { products } from './products'
import { relations } from 'drizzle-orm'

export const images = pgTable('images', {
  id: char('id', { length: 12 }).primaryKey().notNull(),
  productId: char('product_id', { length: 12 })
    .references(() => products.id, { onDelete: 'cascade' })
    .notNull(),
  filename: varchar('filename').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const imagesRelations = relations(images, ({ one }) => ({
  product: one(products, {
    fields: [images.productId],
    references: [products.id],
  }),
}))

export const insertImageschema = createInsertSchema(images, {
  id: z.string().transform(createId).default(createId),
  filename: z.string().trim().min(10).nonempty(),
  productId: z.string().length(12),
})
