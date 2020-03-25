const express = require( 'express' );
const { getChat } = require( '../controller/chat.controller.js' );
const { findChatById } = require( '../middleware' );
const { joinToChat } = require( '../controller/chat.controller.js' );
const { createChat } = require( '../controller/chat.controller.js' );
const { postUser, getUser, deleteUser, updateUser } = require( '../controller/user.controller.js' );

const chatRouter = express.Router();

chatRouter.route( '/chat(/:chatId)?' )
          .get( getChat )
          .post( createChat );

chatRouter.route( '/chat/:chatId/participants' )
          .post( findChatById, joinToChat );



chatRouter.route( '/chat/:chatId/message(/:messageId)' )
          .post();


module.exports = chatRouter;