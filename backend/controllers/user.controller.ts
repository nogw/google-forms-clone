import { Request, Response } from 'express'

const create = async (req: Request, res: Response) => {
  return res.status(200).json({"yee": "yee"})
}

export default {
  create
}