const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const organizationRoutes = require('./routes/organizationRoute');
const productRoutes = require('./routes/productRoute');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Use the route files
app.use('/user', userRoutes);
app.use('/org', organizationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});