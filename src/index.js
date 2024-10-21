import express from 'express'
import MainRouter from './router.js'


const app = express()

app.use('/api', MainRouter)

app.listen(8000, () => {
  console.log('http://localhost:8000')
})