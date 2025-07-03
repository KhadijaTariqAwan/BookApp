const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

const port = 4000

mongoose.connect('mongodb+srv://khadijatariqawan57:khadija123%23@cluster0.qgkogde.mongodb.net/BookApp?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


const db = mongoose.connection

db.on('error', (err) => {
  console.error('MongoDB connection error', err)
})

db.once('open', () => {
  console.log('Connected to MongoDB sucessfully')
})

app.get('/', (req, res) => {
  res.send('Hi There!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
