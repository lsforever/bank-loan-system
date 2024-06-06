import LoanAPI from './loans'
import UtilsAPI from './utils'

const API = { loans: LoanAPI, utils: UtilsAPI }

export type T_API = typeof API

export default API
