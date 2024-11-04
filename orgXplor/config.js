module.exports = {
    database: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
      port: process.env.DB_PORT || 5432
    },
    port: process.env.PORT || 8080
  };