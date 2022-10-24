const express = require('express');
// const bodyParser = require('body-parser');
const routEmail = require('./routes/sendEmail');
const errorTool = require('./error/error');
// const logTool = require('./routes/login');
const pageDirect = require('./routes/directPage');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

// app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'public')));

app.use('/',routEmail);
app.use('/',pageDirect);
// app.use('/',logTool);
app.use(errorTool.get404);

app.listen(39955, ()=> console.log('Server is runing Port: 39955'));