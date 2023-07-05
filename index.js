const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(cookieParser());




app.get('/', function(req, res){
   
   res.render('home', {
      title: "My train Apis",
   })
})

app.post('/train/register', function(req, res){
    console.log(req);
    res.redirect('back')

}) 


app.listen(port, function(err)
{
   if(err)
   {
    console.log('Error', err);
   }
   console.log(`Yup! My express server is run on port: ${port}`);
});

