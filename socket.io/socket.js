const { convertImageToText } = require('../imageToText/imageToText')

exports.startSocket = io => {

    //  connection
    io.on('connection', (socket) => {
        console.log('a user connected');

        //  disconnection
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        //  events listener
        socket.on('image uri', (json) => {
            const res = JSON.parse(json)
            const { uri } = res
            console.log('response from client uri: ', uri);

            convertImageToText(uri, io)
        });
    });
}
