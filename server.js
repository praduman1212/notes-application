const express = require('express');
const connectDB = require('./config/db');
const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
