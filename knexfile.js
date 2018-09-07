module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/vintage_mopeds'
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
}
