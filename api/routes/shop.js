import express from 'express'
// import auth from '../middleware/auth.js'

import { generateShop } from '../controllers/shop.js'

const router = express.Router()

router.post( '/', generateShop )

export default router
