const db = require( '../../db' );
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const messageSchema = new Schema( {
  authorId: {
    type: Schema.Types.ObjectId
  },
  timestamp: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  body: {
    type: Schema.Types.String,
    minLength: 1,

  },
} );

const chatSchema = new Schema( {

    name: {
      type: Schema.Types.String,
      minLength: 4,
      maxLength: 20,

    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    messages: [ messageSchema ]

  } )
;

const Chat = db.model( 'Chat', chatSchema );

module.exports = Chat;
