import sqlite from 'better-sqlite3'
import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import path from 'path'

const dbPath =
  process.env.NODE_ENV === 'development'
    ? './src/preload/database/bank_database.db'
    : path.join(process.resourcesPath, './bank_database.db')

// const dbPath = './src/preload/database/bank_database.db'
const sq_db = new sqlite(dbPath)
sq_db.pragma('journal_mode = WAL')

const db: BetterSQLite3Database = drizzle(sq_db)

export default db
