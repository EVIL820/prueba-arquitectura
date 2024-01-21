// mongooseConfig.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.config.env' });

const DB = process.env.DATABASE;

console.log('Database URL:', DB); // Agregar esta línea para verificar la URL

mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connect };
