const express = require('express');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGO;

const dbName = 'TripTrixDB';

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const client = await MongoClient.connect(dbUri);
    const db = client.db(dbName);
    const users = db.collection('users');

    const user = await users.findOne({ username });

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

    res.json({ token, id: user._id });
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const client = await MongoClient.connect(dbUri);
    const db = client.db(dbName);
    const users = db.collection('users');

    const existingUser = await users.findOne({ username });

    if (existingUser) {
        return res.status(401).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await users.insertOne({ username, hashedPassword, profile_picture: '../assets/default_pfp.jpg' });

    const token = jwt.sign({ id: result.insertedId, username }, process.env.JWT_SECRET);

    res.json({ token });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
