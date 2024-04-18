const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator/check');
const { matchedData, matchedKeys } = require('express-validator/filter');
const joi = require('joi');
const asyncHandler = require('express-async-helpers/dist/middleware/async');
const { isValidObjectId } = require('express-validator/src/validation-parameter-types/object-id');
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port `))