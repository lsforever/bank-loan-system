import { getAllLoans, insertLoan, insertLoanWithGuarantees } from '../database/repositories/loans'
import { Loan as loanT, Guarantee as GuaranteeT } from '../../renderer/src/types/loan'

const LoanAPI = {
  getAllLoans: (): loanT[] => getAllLoans(),
  insertLoan: (data: loanT): void => insertLoan(data),
  insertLoanWithGuarantees: (loan_data: loanT, g1: GuaranteeT, g2: GuaranteeT): void =>
    insertLoanWithGuarantees(loan_data, g1, g2)
}

export default LoanAPI
