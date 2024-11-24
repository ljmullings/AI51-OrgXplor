const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // Sign up / Login
  router.post('/login', async (req, res) => {
    const { credentials, onboarding } = req.body;
    const { email, password, token, type } = credentials || {};

    if (!token && (!email || !password)) {
      return res.status(400).json({ error: 'Email/password or token is required.' });
    }

    try {
      let result;
      if (type === 'GoogleCredentials' || type === 'DiscordCredentials') {
        // Google or Discord authentication logic
        result = await pool.query(
          'SELECT * FROM users WHERE token = $1 AND type = $2',
          [token, type]
        );
      } else {
        // Email/password login
        result = await pool.query(
          'SELECT * FROM users WHERE email = $1 AND password = $2',
          [email, password]
        );
      }

      if (result.rowCount === 0) {
        // If onboarding preferences are provided, create a new user
        if (onboarding) {
          await pool.query(
            'INSERT INTO users (email, password, preferences, token, type) VALUES ($1, $2, $3, $4, $5)',
            [email, password, JSON.stringify(onboarding), token, type]
          );
          return res.status(201).json({ message: 'User created successfully.' });
        }
        return res.status(403).json({ error: 'Invalid credentials.' });
      }

      res.status(200).json({ message: 'Login successful.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Retrieve User Preferences
  router.post('/preferences', async (req, res) => {
    const { credentials } = req.body;
    const { email, token, type } = credentials || {};

    if (!email && !token) {
      return res.status(400).json({ error: 'Email or token is required.' });
    }

    try {
      let result;
      if (type === 'GoogleCredentials' || type === 'DiscordCredentials') {
        // Google or Discord token authentication
        result = await pool.query(
          'SELECT preferences FROM users WHERE token = $1 AND type = $2',
          [token, type]
        );
      } else {
        // Email-based authentication
        result = await pool.query(
          'SELECT preferences FROM users WHERE email = $1',
          [email]
        );
      }

      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json({ user_data: result.rows[0].preferences });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Update User Preferences
  router.post('/preferences/update', async (req, res) => {
    const { credentials, user_data } = req.body;
    const { email, token, type } = credentials || {};

    if (!email && !token || !user_data) {
      return res.status(400).json({ error: 'Email/token and user data are required.' });
    }

    try {
      let result;
      if (type === 'GoogleCredentials' || type === 'DiscordCredentials') {
        // Google/Discord token-based update
        result = await pool.query(
          'UPDATE users SET preferences = $1 WHERE token = $2 AND type = $3',
          [JSON.stringify(user_data), token, type]
        );
      } else {
        // Email-based update
        result = await pool.query(
          'UPDATE users SET preferences = $1 WHERE email = $2',
          [JSON.stringify(user_data), email]
        );
      }

      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json({ user_data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  return router;
};
