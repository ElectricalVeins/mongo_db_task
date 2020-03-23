const express = require( 'express' );
const { updateUser, createUser, readUser, deleteUser } = require( '../controller/user' );

const userRouter = express.Router();

userRouter.route( '/user' )
          .post( createUser )
          .get( readUser )
          .patch( updateUser )
          .delete( deleteUser );

module.exports = userRouter;
