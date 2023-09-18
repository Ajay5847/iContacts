const express = require('express');
const app = express();
const contacts = require('./routers/contactRouter');
const connectToMongo = require('./dbConntect');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config("./.env");
connectToMongo();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use('/api', contacts);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})