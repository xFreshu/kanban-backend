import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import userRoute from './routes/userRoute'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/user', userRoute)
