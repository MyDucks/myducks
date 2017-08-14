
//Twilio credentials
const accountSid = 'AC00b8c28af50b5bc3a89881783674b015'; // Your Account SID from www.twilio.com/console
const authToken = 'aed4812fb57cf70ef699bb7c7c778236';   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);
 
let phones = ['+19167392452', '+14086370081', '+17342248662'];
// let phones = ['+19163405327', '+19163405327', '+19163405327'];

function sendMessage(phones) {
  phones.forEach(phone => {
  console.log(`Sending message to ${phone}`);
  client.messages.create({
    body: `Twilio test ${new Date()}`,
    to: `${phone}`,
    from: '+19167392452'
  })
  .then((message) => console.log(message.sid));
  }); 
} 

module.exports = {
  sendMessage,
}


