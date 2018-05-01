// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db
    .collection('Todos')
    .findOneAndUpdate(
      {
        _id: new ObjectID('5ae7f89257301f52d07100e0')
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  db.close();
});
