var app = require('express')()
var http = require('http').createServer(app)
const bodyParser = require('body-parser')
var io = require('socket.io')(http)

const { tweet, verifyCredentials } = require('./twitter/bot')
const { startSocket } = require('./socket.io/socket')
const { verify } = require('crypto')
const { loadavg } = require('os')

const port = 3000
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/restart', (req, res) => {
  process.exit(1)
})

app.post('/tweet', async (req, res) => {
  const text = req.body.tweet
  try {
    const result = await tweet(text)
    result === true ? console.log('tweet success') : console.log('tweet failed')
    res.send(true)
  } catch (err) {
    res.send(false)
  }
})

http.listen(port, () => {
  console.log(`listening app at http://localhost:${port}`)

  startSocket(io)
})
