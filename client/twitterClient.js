require('dotenv').config()

const Twitter = require("twitter-lite")

const {twitter, verify_credentials} = require('./../config/config')

// console.log({...verify_credentials})

exports.client = new Twitter({...verify_credentials})

