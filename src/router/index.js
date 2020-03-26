const express = require( 'express' );
const userRouter = require( './userRouter' );
const chatRouter = require( './chatRouter' );
const adminRouter=require('./adminRouter');

const router = express.Router();

router.use( adminRouter );
router.use( userRouter );
router.use( chatRouter );


module.exports = router;