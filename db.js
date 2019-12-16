const mongoose = require("mongoose");

// const uri = `mongodb+srv://admin:${process.env.DB_PASSWD}@colocolodb-0jeo4.mongodb.net/${process.env.DB_NAME}?retryWrites=true`;
const uri = `mongodb://localhost/colocolo`;

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// mongoose.Promise = global.Promise;

// module.exports = {
//     User: require('./models/user')
// };