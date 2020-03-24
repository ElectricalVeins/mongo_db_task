const express = require( 'express' );
const { updateUser, createUser, readUser, deleteUserById } = require( '../controller/user' );

const userRouter = express.Router();

userRouter.route( '/user(/:id)?' )
          .post( createUser )
          .get( readUser )
          .patch( updateUser )
          .delete( deleteUserById );

module.exports = userRouter;
