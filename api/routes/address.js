import express from 'express'
import auth from '../middleware/auth.js'

import { fetchUserAddressList } from '../controllers/address.js'

const router = express.Router()

router.get( '/', auth, fetchUserAddressList )

export default router
