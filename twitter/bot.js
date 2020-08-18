const { client } = require('./../client/twitterClient')

exports.verifyCredentials = () => {
  client
    .get('account/verify_credentials')
    .then(results => {
      if (results !== null) {
        console.log('Account Verified: Id: ', results.id)
      }
    })
    .catch(console.error)
}

exports.tweet = async status => {
  const threads = getThreads(status)

  let lastTweetID = ''

  if (threads.length > 1) {
    try {
      for (const status of threads) {
        const tweet = await client.post('statuses/update', {
          status: status,
          in_reply_to_status_id: lastTweetID,
          auto_populate_reply_metadata: true,
        })
        lastTweetID = tweet.id_str
      }
      return true
    } catch (err) {
      console.error('Error in tweeting: ', err)
      return false
    }
  }
}

/*
 * logic to break a long paragraph into paragraphs under 270 character limit
 */
const getThreads = status => {
  const length = status.length

  const threads = []

  if (length > 270) {
    const iterations = Math.ceil(length / 270)
    let remainingString = ''
    let substring = ''
    let ar1
    let thread

    for (i = 0; i < iterations; i++) {
      if (i === iterations - 1) {
        substring = remainingString + status.substring(269 * i)
        thread = substring + ' #IndianHistory #History'
      } else {
        substring = remainingString + status.substring(269 * i, 269 * i + 269)
        ar1 = substring.split(' ')
        remainingString = ar1.splice(ar1.length - 1, 1)
        thread = ar1.join(' ')
      }

      console.log(
        'thread: \t',
        thread,
        'Thread length: ',
        thread.length,
        '\n\n'
      )

      threads.push(thread)
    }
  } else {
    threads.push(status)
  }

  return threads
}
