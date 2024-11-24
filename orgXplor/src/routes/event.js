const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // Create Event
  router.post('/create', async (req, res) => {
    const { credentials, event } = req.body;

    if (!credentials || !event) {
      return res.status(400).json({ error: 'Credentials and event data are required.' });
    }

    try {
      await pool.query(
        'INSERT INTO events (org_id, event_name, event_time, interaction_style, event_type, field_of_study, targeted_years, extracurricular_types, social_setting, academic_interests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [
          event.org_id,
          event.event_name,
          event.event_time,
          event.interaction_style,
          event.event_type,
          event.field_of_study,
          event.targeted_years,
          event.extracurricular_types,
          event.social_setting,
          event.academic_interests,
        ]
      );
      res.status(201).json({ message: 'Event created successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Remove Event
  router.post('/remove', async (req, res) => {
    const { credentials, event } = req.body;

    if (!credentials || !event) {
      return res.status(400).json({ error: 'Credentials and event data are required.' });
    }

    try {
      await pool.query('DELETE FROM events WHERE org_id = $1 AND event_name = $2', [
        event.org_id,
        event.event_name,
      ]);
      res.status(200).json({ message: 'Event removed successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  // Get Recommended Events
  router.post('/recommend', async (req, res) => {
    const { credentials } = req.body;

    if (!credentials) {
      return res.status(400).json({ error: 'Credentials are required.' });
    }

    try {
      const result = await pool.query('SELECT * FROM events'); // Replace with recommendation logic
      res.status(200).json({ events: result.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  return router;
};
