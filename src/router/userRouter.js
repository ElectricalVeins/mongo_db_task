const express = require( 'express' );
const { postUser, getUserByID, deleteUserById, updateUserById,getAllUsers } = require( '../controller/user.controller' );

const userRouter = express.Router();

userRouter.route( '/user(/:id)?' )
          .post( postUser )
          .get( getUserByID )
          .patch( updateUserById )
          .delete( deleteUserById )
          .get(getAllUsers);

module.exports = userRouter;
