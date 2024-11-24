const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // Add Organisation
  router.post('/add', async (req, res) => {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Organisation name is required.' });
    }

    try {
      await pool.query(
        'INSERT INTO organisations (name, description) VALUES ($1, $2)',
        [name, description]
      );
      res.status(201).json({ message: 'Organisation added successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Edit Organisation
  router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const result = await pool.query(
        'UPDATE organisations SET name = $1, description = $2 WHERE id = $3',
        [name, description, id]
      );

      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Organisation not found.' });
      }

      res.status(200).json({ message: 'Organisation updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Delete Organisation
  router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const result = await pool.query('DELETE FROM organisations WHERE id = $1', [id]);

      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Organisation not found.' });
      }

      res.status(200).json({ message: 'Organisation deleted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  return router;
};
