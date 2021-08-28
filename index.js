var express = require('express')
var app = express()

// config for your database

const sql = require('mssql')
const sqlConfig = {
  user: 'db_a786ad_elkwtherps_admin',
  password: 'kps@2020',
  database: 'db_a786ad_elkwtherps',
  server: 'SQL5105.site4now.net',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}
app.get('/', async (req, res) => {
  // connect to your database

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig)
    const result = await sql.query`select * from test`
    console.log(result.recordsets[0].length)
    if (result.recordsets[0].length === 0) {
      res.send({
        msg: 'No item In data base table',
        err: 'Err'
      })
    } else {
      res.send(result.recordsets[0])
    }
  } catch (err) {
    console.log(err)
    res.send('err')
  }
})

const server = app.listen(5000, function () {
  console.log('Server is running..')
})
