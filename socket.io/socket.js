const { convertImageToText } = require('../imageToText/imageToText')

exports.startSocket = io => {
  //  connection
  io.on('connection', socket => {
    console.log('a user connected')

    //  disconnection
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })

    //  events listener
    socket.on('image uri', json => {
      console.info('image url received from client\n')

      const res = JSON.parse(json)
      const { id, uri } = res
      console.log('response from client uri: ', uri, "id: ", id);

      console.info('image conversion started\n')
      convertImageToText(id, uri, io)
    })
  })
}
