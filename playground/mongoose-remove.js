const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todos.remove({}).then((result)=>{
  console.log(result);
});*/

//Todos.findOneAndRemove
//Todos.findByIdAndRemove

Todos.findByIdAndRemove('5b561f766b7f9e7946c0ed1e').then((todo)=>{
  console.log(todo);
});
