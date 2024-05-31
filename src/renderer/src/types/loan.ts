export type Loan = {
  loan_number: number
  date: string
  name: string
  address: number
  savings_account_number: number
  total_outstanding: number
  total_disbursed: number
  due_amount: number
  loan_type: string
  product_type: string
  guarantee_1: number
  guarantee_2: number
}

export type Guarantee = {
  guarantee_id: string
  name: string
  account_number: number
  address: string
  nic: string
  mobile_number: number
  income: number
  occupation: string
  working_place: string
}
