const express = require('express')
const dotenv = require('dotenv')
const connectToMongo = require('./config/db');
var cors=require('cors')
dotenv.config();
connectToMongo();

const app = express();
app.use(express.json())
app.use(cors())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Node server running on port number ${PORT}`);
})

