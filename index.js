const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('content')
})

app.listen(port, () => {
  console.log(`NguyenCanhQuang http://localhost:${port}`)
})