const express = require('express');
const app = express();
const contacts = require('./routers/contactRouter');
const connectToMongo = require('./dbConntect');

const PORT = 5000;
connectToMongo();
app.use(express.json());
app.use('/api', contacts);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})