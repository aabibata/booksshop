const {ObjectID} = require('mongodb');

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
    //res.send(req.params); return l'id mis en parametre dans l'url
    id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.send(404);
    }
    Todos.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send(e);
          }
          res.send(todo);
       
        }).catch((e) =>  res.status(400).send(e));
});

app.delete('/todos/:id', (req, res)=>{
    id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.send(404);
    }
    Todos.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send(e);
          }
          res.send(todo);
       
        }).catch((e) =>  res.status(400).send(e));
});

app.listen(port, ()=>{
    console.log( `Mongoose Server is up on port ${port}`);
})

module.exports={app};


