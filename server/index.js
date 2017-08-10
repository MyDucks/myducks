const express = require('express');
const bodyParser = require('body-parser');
//Create instance of express
let app = express();
let port = 3000;
let urlencodedParser = bodyParser.urlencoded({extended: false});
//Serve public folder at app root URL
app.use(express.static(__dirname + '/../client/dist'));
app.get('/', express.static('public'));

app.post('/event', urlencodedParser, (req, res) => {
  //Parse and store incoming data about event
  let lat = req.query.latitude;
  let lng = req.query.langitude;
  let eventType = req.query.eventType;
  // let userName = req.query.userName; Keep it for later future
});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
