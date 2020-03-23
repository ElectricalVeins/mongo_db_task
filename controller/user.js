const db = require( '../db/index.js' );
const User = require( '../db/models/users.js' );

async function createUser( req, res, next ) {
  try {
    const user = new User( req.body );
    await user.save();

    res.send( user );
  } catch ( e ) {
    next( e )
  }
}

async function readUser( req, res, next ) {
  try {
    const { body: { filter, fields } } = req;
    const selectedItems = await User.find( filter, fields );

    res.send( selectedItems );
  } catch ( e ) {
    next( e )
  }
}

async function updateUser( req, res, next ) {
  try {

    const { body: { queryFilter, newValue, options } } = req;
    const result = await User.updateOne( queryFilter, newValue, options );

    res.send( result )
  } catch ( e ) {
    next( e )
  }
}

async function deleteUser( req, res, next ) {
  try {
    const { body: { filter, options } } = req;
    const result = await User.deleteOne( filter, options );

    res.send( result )
  } catch ( e ) {
    next( e )
  }
}

module.exports = {
  readUser,
  createUser,
  updateUser,
  deleteUser
};