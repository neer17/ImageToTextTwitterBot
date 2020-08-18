const Tesseract = require('tesseract.js')

const { STATUS_COMPLETED } = require('../utils/constants')

exports.convertImageToText = async (id, url, io) => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(url, 'eng', {
      logger: m => {
        const { progress, status } = m
        io.emit(
          'server response',
          JSON.stringify({
            id,
            progress,
            status,
          })
        )
      },
    })

    // console.log('text: ', text)

    //  socket emitter
    console.info('image converted success')

    io.emit(
      'server response',
      JSON.stringify({
        id,
        progress: 1,
        status: STATUS_COMPLETED,
        tweet: text,
      })
    )
  } catch (err) {
    console.error(err)
    io.emit(
      'server error',
      JSON.stringify({
        message: 'Server stopped',
        stackTrace: err + ""
      })
    )
  }
}
