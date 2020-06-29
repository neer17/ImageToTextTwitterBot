require('dotenv').config()

const Twitter = require("twitter-lite")

const {twitter, verify_credentials} = require('./../config/config')

exports.client = new Twitter({...verify_credentials})

