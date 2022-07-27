//npm install nodemailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth:{
user: 'Your Email',
pass: 'Your Password'
}
});


var mailOptions = {
from: 'Your Email',
to: 'Your Friend's Email',
subject: 'Sending Email using Node.js',
html: '<h1>Hello Friend, How are you?</h1>'
}

transporter.sendMail(mailOptions, function(error,info){
if(error){
console.log(error);
}
else{
console.log('Email sent: ' + info.response);
}
});
