import OrderDrink from '../model/orderDrink.js'
import Drink from '../model/drink.js'
import Order from '../model/order.js'

const generateOrderDrinks = async ( req, res ) => {
  try {
    const { drinks, orderId } = req.body
    const len = drinks.length

    for ( let i = 0; i < len; i++ ) {
      const { _id, count, totalPrice, temperature, sugar, addon } = drinks[i]

      await OrderDrink.create({
        drink_id: _id,
        order_id: orderId,
        count,
        total_price: totalPrice,
        temperature,
        sugar,
        addon
      })

      if ( i === len - 1 ) res.status( 200 ).json( { success: true, message: `${ len } OrderDrinks created successfully` } )
    }
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

const fetchOrdersDrinks = async ( req, res ) => {
  try {
    const orders = await Order.find( { user_id: req.userId } ).sort( { createdAt: -1 } )
    const len = orders.length
    let ordersArr = []

    for ( let i = 0; i < len; i++ ) {
      const order = orders[i]
      const orderDrinks = await OrderDrink.find( { order_id: order._id } )
      const drinks = await fetchDrinks( orderDrinks )

      const obj = {
        _id: order._id,
        count: order.count,
        price: order.price,
        shop: order.shop,
        address: order.address,
        type: order.type,
        status: order.status,
        createdAt: order.createdAt,
        drinks
      }

      ordersArr.push( obj )

      if ( i === len - 1 ) res.status( 200 ).json( { success: true, data: ordersArr } )
    }
  } catch (error) {
    res.status( 500 ).send( error )
  }
}

const fetchDrinks = orderDrinks => new Promise( ( resolve, reject ) => {
  const len = orderDrinks.length
  let drinks = []

  const handleFetch = async () => {
    for ( let i = 0; i < len; i++ ) {
      const orderDrink = orderDrinks[i]
      const drink = await Drink.findById( orderDrink.drink_id )

      const obj = {
        _id: drink._id,
        name: drink.name,
        current_price: drink.current_price,
        origin_price: drink.origin_price,
        image: drink.image,
        count: orderDrink.count,
        total_price: orderDrink.total_price,
        temperature: orderDrink.temperature,
        sugar: orderDrink.sugar,
        addon: orderDrink.addon
      }

      drinks.push( obj )

      if ( i === len - 1 ) resolve( drinks )
    }
  }

  handleFetch()
} )

export {
  generateOrderDrinks,
  fetchOrdersDrinks
}
