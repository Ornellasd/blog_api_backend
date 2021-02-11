import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import indexRouter from './routes/index';

const app = express();

app.use(cors());

// mongoose setup
import mongoose from 'mongoose';
const dev_db_url = 'mongodb://127.0.0.1:27017/blog_api';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes
app.use('/', indexRouter);
 
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));

module.exports = app;