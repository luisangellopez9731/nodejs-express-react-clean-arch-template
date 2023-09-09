import initDB from "modules/shared/firebase"
import { config as dotenvConfig } from 'dotenv'
import express, { ErrorRequestHandler, NextFunction, Response, Request } from 'express'
import { appointmentRouter, clientRouter, } from './modules'
import cors from 'cors'

dotenvConfig()
initDB()


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log("guard")
  next()
})


app.use('/clients', clientRouter)
app.use('/appointments', appointmentRouter)


app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    error: err.toString()
  })
})

const { PORT } = process.env
const port = parseInt(PORT || '5000')

app.listen(port, () => {
  console.log(`Server listen in port ${port}`)
})



