const express = require( 'express' );
const { getAllUsers } = require( '../controller/user.controller' );

const adminRouter = express.Router();

adminRouter.route( '/admin/users' )
           .get( getAllUsers );

module.exports = adminRouter;
