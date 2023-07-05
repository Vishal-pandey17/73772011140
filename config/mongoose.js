const mongoose = require('mongoose');

const db = main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/train-Apis');
  console.log("Successfully connected to MongoDB");
 
}
module.exports = db;