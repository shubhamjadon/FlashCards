require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5100;
const client = require('./db/config');
const apiRoutes = require('./routes/main');

app.use(express.static('build'));
app.use(express.json());  // use for apis
app.use(cors());
app.use('/api', apiRoutes); //it makes sure that main routes are called on /api/

client.connect(err => {
    if(err) throw err;

    app.listen(PORT, () => {
        console.clear();
        console.log(`Server is listening on port ${PORT}`)
    })
})