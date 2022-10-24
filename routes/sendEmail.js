const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const path = require('path');
router.use(express.urlencoded({extended:false}));

const sendEmail = (response,res) => {
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nextgenerationfuture2019@gmail.com',
	        pass: '!aB256987ba!8539@gmaltd@#$51'
        }
    });

    let mailOption1 = {
        from:response.email,
        to: 'mylp@leadmecms.co.il',
        subject: '2d92a9b5f6cfe354d48b11f8740315360fa24f57e774485c40af421bc2fb447f',
        text:  
        "Name: " + response.name + "\n" + "Email: " + response.email + "\n" +
        "Phone: " +response.phone 

    };

    transporter.sendMail(mailOption1,(err,info)=> {
        if(err){
            console.log(err);
        } else {
            console.log('Email Sent: ' + info.response);
        }
    });
    let mailOption2 = {
        from:response.email,
        to: 'Happyarc10@gmail.com',
        subject: 'שלום HAPPY ARCHITECT- לקוח השאיר פרטים באתר',
        text:  
        "שם: " + response.name + "\n" + "אמייל: " + response.email + "\n" +
        "טלפון: " +response.phone 

    };

    transporter.sendMail(mailOption2,(err,info)=> {
        if(err){
            console.log(err);
        } else {
            console.log('Email Sent: ' + info.response);
        }
    });
};


//function for inserting message detials into database
// const insertIntoTables = (user,res) => {
//     //
//     db.query("insert into NEW_LEADS set ?", user, (error, results, feilds) => {
//         if(error){
//          throw error;   
//         }else {
//             console.log('Sucssesfull adding new tables');
//         }
//     })
//     .then(result => {
//         console.log('Sucssesfull adding new tables');

//     })
//     .catch(err => {
//         console.log(err)
//     });
    
    
// }


router.post('/send_email', (req,res) => {
    
    //create current date here
    
    //define your message here 
    var message =  "שלום רם,יש לנו לקוח חדש !Costumer:"/+req.body.name+":-)צור איתי קשר בבקשה במספר זה "+req.body.phone + "and on my email "+req.body.email + "";
	
    response = {
		name:req.body.name,
		email:req.body.email,
		phone:req.body.phone,
		message:req.body.message
		
    }
    
    let mes = req.body.message;
    let tel = req.body.phone;
    
   
	
    
    if(tel.length >= 11){
        console.log('Spam message');

    } else {
        console.log('Message send Successfully to the client');
        sendEmail(response,res);
        // routeSms.sendSms(response);
        // insertIntoTables(newLead,res);

    }
    
    res.redirect('/');
    res.end();
});





module.exports = router;