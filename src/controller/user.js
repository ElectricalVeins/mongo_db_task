const User = require( '../db/models/users.js' );

module.exports.createUser = async ( req, res, next ) => {
  try {
    const user = new User( req.body );
    const newUser = await user.save();
    if( newUser ) {
      res.status( 201 ).send( newUser );
    } else {
      res.status( 400 ).send( 'Bad req' )
    }
  } catch ( e ) {
    next( e )
  }
};

module.exports.readUser = async ( req, res, next ) => {
  try {
    const { body: { filter, fields }, params: { id } } = req;

    if( id ) {
      const selectedItems = await User.findById( id, {
        _v: false,
      } );
      res.status( 200 ).send( selectedItems );
    }

    const selectedItems = await User.find( filter, {
      _v: false,
      ...fields
    } );
    res.status( 201 ).send( selectedItems );
  } catch ( e ) {
    next( e )
  }
};

module.exports.updateUser = async ( req, res, next ) => {
  try {
    const { body: { queryFilter, newValue, options }, params: { id } } = req;
    if( id ) {
      const selectedItems = await User.findByIdAndUpdate( id, newValue );
      res.status( 200 ).send( selectedItems );
    }
    const result = await User.updateOne( queryFilter, newValue, options );

    res.send( result )
  } catch ( e ) {
    next( e )
  }
};

module.exports.deleteUserById = async ( req, res, next ) => {
  try {
    const { body: { options }, params: { id } } = req;
    const result = await User.findByIdAndDelete( id, options );
    if( result ) {
      return res.send( result )
    }
    res.status( 400 ).send( 'Bad req' )

  } catch ( e ) {
    next( e )
  }
};

