import express from 'express'
import userCtrl from '../controllers/user.controller'
import formCtrl from '../controllers/form.controller'

const router = express.Router()

router.route('/user/register')
  .post(userCtrl.register)

router.route('/user/login')
  .post(userCtrl.login)

router.route('/form/create')
  .post(formCtrl.create)

router.route('/form/getMyForms')
  .get(formCtrl.getMyForms)

router.route('/form/getForm')
  .get(formCtrl.getForm)

export default router