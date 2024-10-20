const redis = require('redis');

const client = redis.createClient();

client.connect().catch(console.error);

client.on('error', (err) => {
  console.log('Redis error: ', err);
});

module.exports = client;
