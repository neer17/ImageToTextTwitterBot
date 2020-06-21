
const express = require('express')
const bodyParser = require('body-parser')

const {convertImageToText} = require('./utils/imageToText')


const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/downloadUrl', (req, res) => {
    const body = req.body
    console.info(body)

    //
    convertImageToText(body.url)
    res.json({
        "response": "Successfully got the uri"
    })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
