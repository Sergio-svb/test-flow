const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
let episodes = require('./routes/episodes');
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/episodes', episodes);

app.listen(port, () => {
    console.log('We are live on ' + port);
});