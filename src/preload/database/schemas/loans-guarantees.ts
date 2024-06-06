import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core'

export const loanGuarantee = sqliteTable(
  'loan_guarantee',
  {
    loan_number: integer('loan_number').notNull(),
    guarantee_number: integer('guarantee_number').notNull(),
    name: text('name'),
    address: text('address'),
    nic: text('nic'),
    mobile_number: integer('mobile_number'),
    account_number: integer('account_number'),
    income: integer('income'),
    occupation: text('occupation'),
    working_place: text('working_place')
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.loan_number, table.guarantee_number] })
    }
  }
)

export default loanGuarantee
