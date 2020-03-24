const User = require( '../db/models/users.js' );

module.exports.createUser = async ( req, res, next ) => {
  try {
    const user = new User( req.body );
    const newUser = await user.save();
    if( newUser ) {
      res.send( newUser );
    } else {
      console.log( new Error( 'User is not saved' ) )
    }
  } catch ( e ) {
    next( e )
  }
};

module.exports.readUser = async ( req, res, next ) => {
  try {
    const { body: { filter, fields }, params:{id}} = req;

    if( id ) {
      const selectedItems = await User.find( {_id:id} );
      res.send( selectedItems );
    }

    const selectedItems = await User.find( filter, fields );
    res.send( selectedItems );
  } catch ( e ) {
    next( e )
  }
};

module.exports.updateUser = async ( req, res, next ) => {
  try {

    const { body: { queryFilter, newValue, options } } = req;
    const result = await User.updateOne( queryFilter, newValue, options );

    res.send( result )
  } catch ( e ) {
    next( e )
  }
};

module.exports.deleteUser = async ( req, res, next ) => {
  try {
    const { body: { filter, options } } = req;
    const result = await User.deleteOne( filter, options );

    res.send( result )
  } catch ( e ) {
    next( e )
  }
};

