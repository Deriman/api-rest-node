require("dotenv").config();
const dbConnect = require("./config/mongo")
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', require('./routes'))

app.listen( port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()