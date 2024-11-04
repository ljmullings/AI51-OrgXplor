-- Create the OrgXplor database if it doesn't exist
CREATE DATABASE IF NOT EXISTS OrgXplor;

-- Switch to the OrgXplor database
\c OrgXplor;

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
