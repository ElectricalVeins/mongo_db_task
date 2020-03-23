const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/fd_mongoose',
  ( err ) => {
    if( err ) {
      process.exit( 1 )
    }
  } );

module.exports=mongoose.connection;
