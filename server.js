var express = require('express')
var app = express();
var cors = require('cors')
require('dotenv').config()

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());

//set up controllers

app.use('/',require('./routes'))
 


app.listen(3004, () =>
  console.log(`\nThe server is running on port `)
);