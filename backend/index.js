const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const port = 4000

app.get('/', (req, res) => {
  res.send('Hi There!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
