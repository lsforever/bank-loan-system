import migrateDatabase from '../database/migrate'

const LoanAPI = {
  migrateDatabase: (): void => migrateDatabase()
}

export default LoanAPI
