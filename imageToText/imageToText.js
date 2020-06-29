const Tesseract = require('tesseract.js')

const {STATUS_COMPLETED} = require('../utils/constants')

exports.convertImageToText = async (url, io) => {
    try {
        const {
            data: {
                text
            }
        } = await Tesseract.recognize(
            url,
            'eng', {
                logger: m => {
                    const {
                        progress,
                        status
                    } = m
                    io.emit('server response', JSON.stringify({
                        progress,
                        status
                    }))
                }
            }
        )

          // console.log('text: ', text)
          io.emit('server response', JSON.stringify({
            progress: 1,
            status: STATUS_COMPLETED,
            tweet: text
        }))
    } catch (err) {
        console.error(err)
    }

}