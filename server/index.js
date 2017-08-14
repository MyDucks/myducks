const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('./helpers/twilio.js');

let port = process.env.PORT || 3000;
let app = express();
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/../client/dist'));
app.get('/', express.static('public'));

app.post('/event', urlencodedParser, (req, res) => {
  let lat = req.query.latitude;
  let lng = req.query.langitude;
  let eventType = req.query.eventType;
  // let cell = req.query.cell;
  let phones = ['+19167392452', '+16507045868', '+19167392452'];
  twilio.sendMessage(phones);
  // let userName = req.query.userName;
});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
