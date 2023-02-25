import express from 'express'
import userRoute from './routes/userRoute'
const app = express()

app.listen(3000, () => {
    console.log('test')
})

app.use('/api/user', userRoute)
