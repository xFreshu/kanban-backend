import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import userRoute from './routes/userRoute'
import boardRoute from './routes/boardRoute'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
//App routes
app.use('/api/user', userRoute)
app.use('/api/board', boardRoute)
