import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import db from './db'

// This will run migrations on the database, skipping the ones already applied
const migrateDatabase = (): void => migrate(db, { migrationsFolder: './drizzle' })

export default migrateDatabase
