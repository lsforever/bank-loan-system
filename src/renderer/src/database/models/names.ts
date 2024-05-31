import db from '../dbmjr'

const readAllNames = () => {
  try {
    const query = `SELECT * FROM gots`
    // const query = `SELECT name FROM sqlite_temp_master WHERE type='table'`
    // const query =
    //   'CREATE TABLE bot (' +
    //   'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
    //   'Time DATETIME, ' +
    //   'name VARCHAR(255))'
    const readQuery = db.prepare(query)
    // readQuery.run()
    const rowList = readQuery.all()
    return rowList
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default readAllNames
