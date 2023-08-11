import Order from '../model/order.js'

const generateOrders = async ( req, res ) => {
  try {
    const { count, discount, price, shop, address, type, status } = req.body
    const newOrder = await Order.create( { count, discount, price, shop, address, type, status } )
    res.status( 200 ).json( { success: true, data: newOrder } )
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

export {
  generateOrders
}
