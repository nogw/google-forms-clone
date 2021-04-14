import { Request, Response } from 'express'
import Form from '../models/form.model'

const create = ( req: Request, res: Response ) => {
  try {
    let form = new Form({
      user_id: req.body.user_id,
      title: req.body.title,
      description: req.body.description,
      data: req.body.data,
      cards: req.body.cards
    })

    form.save()
    .then((form: any) => {
      return res.status(200).json({
        message: "created form",
        link: `http://localhost:3000/${form._id}`
      })
    })
    .catch((error: any) => {
      return res.status(400).json({
        messageError: error
      })
    })
  } catch (error: any) {
    return res.status(400).json({
      messageError: error
    })
  }
}

const getMyForms = async ( req: Request, res: Response ) => {
  try {
    const forms = await Form.find({ user_id: req.query.id }, {'id':1, 'user_id':1, 'title':1}).exec()

    return res.status(200).json({
      results: forms
    })
  } catch (error: any) {
    return res.status(400).json({
      messageError: error
    });
  }
}

const getForm = async ( req: Request, res: Response ) => {
  try {
    const form: any = await Form.findById(req.query.idForm).exec()
    
    if (form != null) {
      return res.status(200).json({
        result: form
      })
    } else {
      return res.status(400).json({
        messageError: "user not found"
      })
    }
  } catch (error: any) {
    return res.status(400).json({
      messageError: error
    })
  }
}

export default {
  create, 
  getMyForms,
  getForm
}