const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.post('/auth', (req, res) => {
  const { username, password } = req.body
  if (username === 'username' && password === 'password') {
    res.status(201).json({ token: 'supertoken' })
  } else {
    res.status(404).json({ error: 'wrong credentials' })
  }
})

app.get('/list', (req, res) => {
  if (req.header('AUTH') === 'supertoken') {
    res.status(200).json(["Max", "Patrick", "Rasmus", "Hun"])
  } else {
    res.status(401).json({error: 'unauthorized'})
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
