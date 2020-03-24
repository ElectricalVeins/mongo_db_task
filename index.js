const db = require( './db' );
const express = require( 'express' );
const cors = require( 'cors' );
const userRouter = require( './router/userRouter' );

const app = express();
app.use( cors() );
app.use( express.json() );

app.use( userRouter );

const PORT = process.env.NODE_PORT || 3030;
app.listen( PORT, () => console.log( `App listening on port ${PORT}!` ) );