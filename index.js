var mongoose = require('mongoose');
var app = require('./server.js');

const url = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

const path = require('path');
const exphbs = require('express-handlebars');

//Configure hbs

app.engine('handlebars', exphbs({defaultLayout: 'main'}));        
app.set('view engine', 'handlebars');
///onnect to mongodb
mongoose.connect(url, (err, res)=>{
  if(err) throw(err);
  console.log('DB coonection succesful');
  
  //Start server
  app.listen(port,(err, res)=>{
    console.log(`Server running on PORT ${port}`);
  })
})
