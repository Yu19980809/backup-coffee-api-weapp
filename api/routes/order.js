import express from 'express'
import auth from '../middleware/auth.js'

import { generateOrders } from '../controllers/order.js'

const router = express.Router()

router.post( '/', auth, generateOrders )

export default router
