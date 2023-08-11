import express from 'express'

import { fetchAllDrinks, generateDrinks } from '../controllers/drink.js'

const router = express.Router()

router.get( '/', fetchAllDrinks )
router.post( '/', generateDrinks )

export default router
