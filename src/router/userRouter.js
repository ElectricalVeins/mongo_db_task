const express = require( 'express' );
const { postUser, getUser, deleteUser, updateUser } = require( '../controller/user.controller' );

const userRouter = express.Router();

userRouter.route( '/user(/:id)?' )
          .post( postUser )
          .get( getUser )
          .patch( updateUser )
          .delete( deleteUser );

module.exports = userRouter;
