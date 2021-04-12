require('dotenv').config()

import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use("/", userRoutes)

app.listen(port, () => {
  console.log('Server started on port '+port)
})