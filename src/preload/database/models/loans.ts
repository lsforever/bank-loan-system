import db from '../dbmjr'
import { Loan as T_loan } from '../../../renderer/src/types/loan'

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

const insertLoan = (D_loan: T_loan): void => {
  try {
    const insertQuery = db.prepare(
      `INSERT INTO ${table_name} (loan_number,date,name,address,mobile_number,savings_account_number,total_outstanding,total_disbursed,due_amount,loan_type,product_type) VALUES (@loan_number, @date, @name, @address, @mobile_number, @savings_account_number, @total_outstanding, @total_disbursed, @due_amount, @loan_type, @product_type)`
    )

    const transaction = db.transaction(() => {
      const info = insertQuery.run(D_loan)
      console.log(
        `Inserted ${info.changes} rows with last ID
               ${info.lastInsertRowid} into loan`
      )
    })
    return transaction()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { getAllLoans, insertLoan }
