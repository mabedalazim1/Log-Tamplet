module.exports = {
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
