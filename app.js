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



http.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)

    startSocket(io)
})