var app = require('express')();
var http = require('http').createServer(app);
const bodyParser = require('body-parser')
var io = require('socket.io')(http);


const { tweet } = require('./twitter/bot');
const { startSocket } = require('./socket.io/socket')


const port = 3000
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/restart', (req, res) => {
    process.exit(1)
})



http.listen(port, () => {
    console.log(`listening app at http://localhost:${port}`)

    startSocket(io)
})