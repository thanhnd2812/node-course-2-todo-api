const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '5ae92ac78aa1cd0f3e22db40';

// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid', id);
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo', todo);
//   })
//   .catch(err => console.log(err));

User.findById('5ae86b867cbfa18f326770a2').then(
  user => {
    console.log(user);
  },
  e => {
    console.log('Unable to find user', e);
  }
);
