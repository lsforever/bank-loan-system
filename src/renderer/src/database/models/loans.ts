import db from '../dbmjr'

const getAllLoans = () => {
  try {
    const query = `SELECT * FROM loan`
    const readQuery = db.prepare(query)
    const rowList = readQuery.all()
    return rowList
  } catch (err) {
    console.error(err)
    throw err
  }
}

const insertLoan = (name, age) => {
  try {
    const insertQuery = db.prepare(`INSERT INTO loan (name, age) VALUES ('${name}' , ${age})`)

    const transaction = db.transaction(() => {
      const info = insertQuery.run()
      console.log(
        `Inserted ${info.changes} rows with last ID
               ${info.lastInsertRowid} into loan`
      )
    })
    transaction()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { getAllLoans, insertLoan }
