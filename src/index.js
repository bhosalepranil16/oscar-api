require('dotenv').config()
const express = require('express');

const oscarRoutes = require('./routes/oscar');

const app = express();
const PORT = process.env.PORT
require('./db/index');

app.use(express.json());
app.use(oscarRoutes);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
