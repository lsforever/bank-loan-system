import { getAllLoans, insertLoan } from '../database/models/loans'
import { Loan as T_loan } from '../../renderer/src/types/loan'

const LoanAPI = {
  getAllLoans: (): T_loan[] => getAllLoans(),
  insertLoan: (data: T_loan): void => insertLoan(data)
}

export default LoanAPI
