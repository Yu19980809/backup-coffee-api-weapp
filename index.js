import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import drinkRoutes from './api/routes/drink.js'
import orderDrinkRoutes from './api/routes/orderDrink.js'
import orderRoutes from './api/routes/order.js'
import sessionRoutes from './api/routes/session.js'
import addressRoutes from './api/routes/address.js'
import shopRoutes from './api/routes/shop.js'

// config
dotenv.config()

// init app
const app = express()

// middleware
app.use( bodyParser.json( { limit: '30mb', extended: true } ) )
app.use( bodyParser.urlencoded( { limit: '30mb', extended: true } ) )
app.use( cors() )

// routes
app.use( '/api/v1/drinks', drinkRoutes )
app.use( '/api/v1/order_drinks', orderDrinkRoutes )
app.use( '/api/v1/orders', orderRoutes )
app.use( '/api/v1/session', sessionRoutes )
app.use( '/api/v1/address', addressRoutes )
app.use( '/api/v1/shop', shopRoutes )

// mongodb
mongoose.set( 'strictQuery', true )
mongoose.connect( 'mongodb://127.0.0.1:27017/guangxin' )
  .then( () => {
    console.log( 'Connected to mongodb' )
    app.listen( 4000, () => console.log( 'Server running on port 4000' ) )
   } )
  .catch( error => console.log( error ) )

