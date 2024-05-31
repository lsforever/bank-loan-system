export type Loan = {
  loan_number: number
  date: string
  name: string | not_available
  address: string | not_available
  mobile_number: number | not_available
  savings_account_number: number | not_available
  total_outstanding: number | not_available
  total_disbursed: number | not_available
  due_amount: number | not_available
  loan_type: string | not_available
  product_type: number | not_available
  guarantee_1: number
  guarantee_2: number
}

export type Guarantee = {
  guarantee_id: string
  name: string | not_available
  account_number: number | not_available
  address: string | not_available
  nic: string | not_available
  mobile_number: number | not_available
  income: number | not_available
  occupation: string | not_available
  working_place: string | not_available
}

type not_available = undefined | null
