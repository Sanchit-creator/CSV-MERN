const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const router = require('./api/index.js');
const app = express();
const PORT = 3000;
const cors = require('cors');

const conn_str = 'mongodb+srv://sanchit:sanchit@csv.mrxu2ta.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
).then(() => console.log('Connected successfully'))
.catch((err) => {console.log(err)})

app.use(cors());
app.use(express.json())
app.use('/api', router);


app.listen(PORT, () => {
    console.log(`App Listening on Port: ${PORT}`);
})


