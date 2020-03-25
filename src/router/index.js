const express = require( 'express' );
const userRouter = require( './userRouter' );
const chatRouter = require( './chatRouter' );

const router = express.Router();

router.use( userRouter );
router.use( chatRouter );

module.exports = router;