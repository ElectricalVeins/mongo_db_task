const db = require( './db' );
const User = require( './db/models/users' );
const express = require( 'express' );
const cors = require( 'cors' );
const userRouter = require( './router/userRouter' );

const app = express();
app.use( cors() );
app.use( express.json() );

app.use(userRouter);

app.listen( 3030 );