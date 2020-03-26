const express = require( 'express' );
const { findChatById } = require( '../middleware' );
const { joinToChat,createChat,getChat, createMessage,getMessages } = require( '../controller/chat.controller.js' );

const chatRouter = express.Router();

chatRouter.route( '/chat(/:chatId)?' )
          .get( getChat )
          .post( createChat );

chatRouter.route( '/chat/:chatId/participants' )
          .post( findChatById, joinToChat );



chatRouter.route( '/chat/:chatId/message(/:messageId)?' )
          .get(findChatById,getMessages)
          .post(findChatById,createMessage)


module.exports = chatRouter;