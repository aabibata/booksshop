const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const fs = require('fs');

/*var {mongoose}= require('./db/mongoose');
var {Todo}= require('./models/todo');
var {Users}= require('./models/user');*/

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/views'));


app.use((req, res, next)=>{//middleware
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;            //console.log(`${now}: ${req.method} ${req.url}`); 
   
    console.log(log);
    //fs.appendFile('server.log', log  + '\n');
    next();//Tres important, si omis la page ne chargera pas
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

/*hbs.registerHelper('getImage1', () => {
  return imageAirport;
});*/

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log( `Server is up on port ${port}`);
});


//module.exports.app = app;