const express = require('express');
require("dotenv").config();
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

const app = express();
const SERVERPORT = process.env.SERVERPORT || 3000;

//middlewares
app.use(morgan('tiny'));
app.use(express.json());

//routes
app.use('/api/v1/users', userRouter);

app.listen(SERVERPORT, () => {
    console.log(`Server listening at port ${SERVERPORT}`);
});