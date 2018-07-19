//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var user ={name:'Bibata', age:35};
var {name}=user;
console.log(name);   // exemple de destructuring (affectation par décomposition)*/

MongoClient.connect('mongodb://localhost:27017/Library', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
   completed: false
   }, (err, result) => {
   if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
   });*/

  // Insert new doc into Users (name, email, passwd, adress , userType)
  /*db.collection('Users').insertOne({
    //_id=123; pour attribuer un id personnalisé
    name: 'Bibata',
    email: 'infoba@gmail.com',
    passwd: 'adm123',
    adress: 'Montreal',
    userType:'admin'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(result.ops);
  });*/
  db.close();
});
