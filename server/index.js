const express = require('express');
const checkMysql = require('../database/checkMysql.js');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const twilio = require('./helpers/twilio.js');


//Create instance of express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 3000;

//Serve public folder at app root URL
app.use(express.static(__dirname + '/../client/dist'));



app.get('/', express.static('public'));

app.post('/createUser', (req, res) => {
req.address
  db.createUser(req.username, req.address, req.phoneNumber)
    .then()
})


app.post('/event', (req, res) => {
  let lat = req.query.latitude;
  let lng = req.query.longitude;
  let eventType = req.query.eventType;

});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
