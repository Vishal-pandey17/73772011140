const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));


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

