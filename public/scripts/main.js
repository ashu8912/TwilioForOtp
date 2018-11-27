//const socket=io("http://localhost:8080");
var phoneNo=document.getElementById('phoneNo'),
countryCode=document.getElementById('countryCode'),
getOtp=document.getElementById('getOtpBtn'),
otpEnter=document.getElementById('OtpEnter'),
phoneNoEnter=document.getElementById('PhoneNoEnter'),
verifyBtn=document.getElementById('verifyBtn'),
Otp=document.getElementById("Otp");
otpEnter.style.display='none';

getOtp.addEventListener("click",()=>{
    // socket.emit("getOtp",{number:`+${countryCode.value}${phoneNo.value}`});
    // phoneNoEnter.style.display="none";
    otpEnter.style.display="block";
});
// socket.on("otp",({otp})=>{
// localStorage.setItem("Otp",otp);
// })
// verifyBtn.addEventListener("click",()=>{
    
//     if(localStorage.getItem("Otp")==Otp.value)
//     {
//         console.log("Otp matched");
//     }
// })
