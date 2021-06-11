import twilio from "twilio";
import dotenv from "dotenv"

dotenv.config({path:"../../.env"});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default async function sendSms(phoneNumber,firstName){
    console.log(firstName)

client.messages
  .create({
     body: ' Hello  ' + firstName + ' welcome, to Money Watch. Its a good journey to go for better budgeting  ',
     from: ' +12028755958',
     to: phoneNumber
   })
  .then(message => console.log(message.sid));
}