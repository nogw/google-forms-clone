import express from 'express'
import userCtrl from '../controllers/user.controller'
const router = express.Router()

router.route('/new/user')
  .get(userCtrl.create)

export default router