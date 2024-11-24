const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const userRoutes = require('./src/routes/user');
const eventRoutes = require('./src/routes/event');
const organisationRoutes = require('./src/routes/organisation');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Route handlers
app.use('user', userRoutes(pool));
app.use('/events', eventRoutes(pool));
app.use('/organisations', organisationRoutes(pool));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
