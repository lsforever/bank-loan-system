import LoanAPI from './loan'

const API = { loans: LoanAPI }

export type T_API = typeof API

export default API
