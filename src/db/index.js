const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/fd_mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
} );

mongoose.connection.once( 'open', () => console.log( 'mongodb connected' ) );

module.exports = mongoose.connection;
