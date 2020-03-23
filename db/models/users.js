const mongoose = require( 'mongoose' );
const yup = require( 'yup' );

const emailValidationSchema = yup.string().email().required()

const Schema = mongoose.Schema;
const userSchema = new Schema( {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [ 'ADMIN', 'USER', 'MODERATOR' ],
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: ( data ) => emailValidationSchema.validate( data ),
      message: 'Email validation failed'
    },
    required: true,
    unique: true,
  },
} );

const User = mongoose.model( 'User', userSchema );

module.exports = User;


