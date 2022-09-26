const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080;

//Middleware

app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/emailriders.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
            user: 'chunchuvijaykumar96@gmail.com',
            pass: 'hkikbhbdhdgsqcjq'
       }
    })

    const mailOptions = {
        from: 'chunchuvijaykumar96@gmail.com',
        to: req.body.email ,
        subject: `Message from chunchuvijaykumar96@gmail.com: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})