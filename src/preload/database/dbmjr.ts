import sqlite from 'better-sqlite3'
import path from 'path'

const dbPath =
  process.env.NODE_ENV === 'development'
    ? './src/preload/database/bank_database.db'
    : path.join(process.resourcesPath, './bank_database.db')

// const dbPath = './src/preload/database/bank_database.db'
const db = new sqlite(dbPath)

db.pragma('journal_mode = WAL')

export default db
