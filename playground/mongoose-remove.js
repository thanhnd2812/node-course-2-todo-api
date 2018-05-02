const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5ae93e155d9106b443ed1498').then(todo => {
  console.log(todo);
});
