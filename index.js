const express=require('express');
const twilio=require('twilio');
const app=express();
const otplib=require('otplib');
const secret = otplib.authenticator.generateSecret();
const keys=require('./config/keys');
const server=app.listen("8080",()=>{
    console.log("listening at port 8080");
});
app.use(express.static('public'));
const socket=require('socket.io');
const io=socket(server);
io.on('connection',(socket)=>{
    console.log("connected");
    socket.on("getOtp",(data)=>{
        var accountSid = keys.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
        var authToken = keys.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
        
    const token = otplib.authenticator.generate(secret)
        var client = new twilio(accountSid, authToken);
        
        client.messages.create({
            body: `otp for verification is ${token}`,
            to: keys.VERIFIED_TWILIO_NO,  // Text this number
            from: keys.MY_TWILIO_NO // From a valid Twilio number
        })
        .then((message) => {
         socket.emit("otp",{otp:token})        
        }      
    );
})
})
// //const VoiceResponse=require('twilio').twiml.VoiceResponse;