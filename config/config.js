module.exports.twitter = {
  consumer_key: `${process.env.API_KEY}`,
  consumer_secret: `${process.env.API_SECRET_KEY}`,
  access_token_key: `${process.env.ACCESS_TOKEN}`,
  access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`,
}

module.exports.webhooks = {
  serverUrl: `${process.env.BASE_URL}`,
  route: `${process.env.ROUTE}`, //default : '/'
  consumerKey: `${process.env.API_KEY}`,
  consumerSecret: `${process.env.API_SECRET_KEY}`,
  accessToken: `${process.env.ACCESS_TOKEN}`,
  accessTokenSecret: `${process.env.ACCESS_TOKEN_SECRET}`,
  environment: `${process.env.ENVIRONMENT}`,
}

module.exports.webhooks_inside = {
  userId: `${process.env.USER_ID}`,
  accessToken: `${process.env.ACCESS_TOKEN}`,
  accessTokenSecret: `${process.env.ACCESS_TOKEN_SECRET}`,
}

module.exports.verify_credentials = {
  subdomain: 'api',
  version: '1.1',
  consumer_key: `${process.env.API_KEY}`,
  consumer_secret: `${process.env.API_SECRET_KEY}`,
  access_token_key: `${process.env.ACCESS_TOKEN}`,
  access_token_secret: `${process.env.ACCESS_TOKEN_SECRET}`,
}
