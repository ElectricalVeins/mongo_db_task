const User = require( '../db/models/User.js' );

module.exports.postUser = async ( req, res, next ) => {
  try {

    const user = new User( req.body );
    const newUser = await user.save();
    if( newUser ) {
      return res.status( 201 ).send( newUser );
    }

    res.status( 400 ).send( 'Bad request' );

  } catch ( e ) {
    next( e );
  }
};

module.exports.getUserByID = async ( req, res, next ) => {
  try {
    const user = await User.findById( req.params.id, {
      __v: false,
    } );
    if( user ) {
      return res.send( user );
    }
    res.status( 404 ).send( 'User not found' );

  } catch ( e ) {
    next( e );
  }
};

module.exports.updateUserById = async ( req, res, next ) => {
  try {
    const { params: { id }, body } = req;

    const updatedUser = await User.findByIdAndUpdate( id, body, { new: true } );
    if( updatedUser ) {
      return res.send( updatedUser );
    }

    res.status( 400 ).send( 'Bad request' );

  } catch ( e ) {
    next( e );
  }
};

module.exports.deleteUserById = async ( req, res, next ) => {
  try {
    const { params: { id } } = req;

    const deletedUser = await User.findByIdAndDelete( id );
    if( deletedUser ) {
      return res.send( deletedUser );
    }

    res.status( 404 ).send( 'Not found' );

  } catch ( e ) {
    next( e );
  }
};

module.exports.getAllUsers = async ( req, res, next ) => {
  try {
    const users = await User.find( {
      __v: false,
    } );

    if( users ) {
      return res.status( 200 ).send( users );
    }
    res.status( 404 ).send( 'Users not found' );
  } catch ( e ) {
    res.send( e )
  }
};