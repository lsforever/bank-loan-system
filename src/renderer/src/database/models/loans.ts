import db from '../dbmjr'
import { Loan as T_loan } from '@/types/loan'

const table_name = 'loan'
const getAllLoans = (): T_loan[] => {
  try {
    const query = `SELECT * FROM ${table_name}`
    const readQuery = db.prepare(query)
    const rowList = readQuery.all()
    return rowList
  } catch (err) {
    console.error(err)
    throw err
  }
}

const insertLoan = (
  loan_number,
  date,
  name,
  address,
  mobile_number,
  savings_account_number,
  total_outstanding,
  total_disbursed,
  due_amount,
  loan_type,
  product_type
) => {
  try {
    const insertQuery = db.prepare(
      `INSERT INTO ${table_name} (loan_number,
        date,
        name,
        address,
        mobile_number,
        savings_account_number,
        total_outstanding,
        total_disbursed,
        due_amount,
        loan_type,
        product_type) VALUES ('${loan_number}',
        '${date}' ,
        '${name}' ,
        '${address}' ,
        '${mobile_number}' ,
        '${savings_account_number}' ,
        '${total_outstanding}' ,
        '${total_disbursed}' ,
        '${due_amount}' ,
        '${loan_type}' ,
        '${product_type}' ,)`
    )

    const transaction = db.transaction(() => {
      const info = insertQuery.run()
      console.log(
        `Inserted ${info.changes} rows with last ID
               ${info.lastInsertRowid} into loan`
      )
    })
    transaction()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { getAllLoans, insertLoan }
