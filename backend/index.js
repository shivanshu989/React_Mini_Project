require('dotenv').config();
const express = require('express');
const connectMongo = require('./db');
const PORT = process.env.PORT;
const cors = require('cors');

const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = require('./routes/userRouter');
const medsRouter = require('./routes/medsRouter');
const paymentRouter = require('./routes/paymentRouter');
app.use('/', userRouter);
app.use('/', medsRouter);
app.use('/', paymentRouter);

connectMongo();