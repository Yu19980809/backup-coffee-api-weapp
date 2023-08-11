import Address from '../model/address.js'

const fetchUserAddressList = async ( req, res ) => {
  try {
    const address = await Address.find( { user_id: req.userId } ).sort( { createdAt: -1 } )
    res.status( 200 ).json( { success: true, data: address } )
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

export {
  fetchUserAddressList
}
