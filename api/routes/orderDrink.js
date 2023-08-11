import express from 'express'
import auth from '../middleware/auth.js'

import { fetchOrdersDrinks, generateOrderDrinks } from '../controllers/orderDrink.js'

const router = express.Router()

router.post( '/', generateOrderDrinks )
router.get( '/', auth, fetchOrdersDrinks )

export default router
