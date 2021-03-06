const db = require( './db' );
const express = require( 'express' );
const cors = require( 'cors' );
const router = require( './router' );

const app = express();
app.use( cors() );
app.use( express.json() );

app.use( '/api', router );

const PORT = process.env.NODE_PORT || 3030;

app.listen( PORT, () => console.log( `App listening on port ${PORT}!` ) );