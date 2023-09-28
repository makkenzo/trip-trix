const express = require('express');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
