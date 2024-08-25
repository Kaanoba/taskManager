const express = require('express');
const app = express();
const port = 7000;
require('dotenv').config();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');

app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/tasks',tasks);


const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Express starter on ${port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

start();


