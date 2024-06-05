import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const loan = sqliteTable('loan', {
  loan_number: integer('loan_number').primaryKey(),
  date: text('date').notNull(),
  name: text('name'),
  address: text('address'),
  mobile_number: integer('mobile_number'),
  savings_account_number: integer('savings_account_number'),
  total_outstanding: integer('total_outstanding'),
  total_disbursed: integer('total_disbursed'),
  due_amount: integer('due_amount'),
  product_type: integer('product_type'),
  loan_type: text('loan_type')
})

export default loan
