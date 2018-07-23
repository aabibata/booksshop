var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./db/mongoose');
var {Todos}= require('./models/todo');
var {Users}= require('./models/user');

const port = process.env.PORT || 3000;

var app =express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    //console.log(req.body);
    var todos = new Todos({
        text:req.body.text
    });
    todos.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});
app.get('/todos', (req, res)=>{
    Todos.find().then((todos)=>{
        res.send({todos})
    }, (e)=>{
        res.status(400).send(e);
    });
})

// GET todo/16569
app.get('/todos/:id', (req, res)=>{
    res.send(req.params);
});

app.listen(port, ()=>{
    console.log( `Mongoose Server is up on port ${port}`);
})

module.exports={app};


