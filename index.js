const express = require("express");
const server = express();
let cors = require('cors');
const Api = require('./channelRouter/router');
const client = require("./redisClient");
const PORT = 3000;
server.use(cors());

server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => res.send('<h1>Api Run</h1>'));
server.use('/api', Api)

client.on('connect', () => {
    console.log('Connected to Redis...');
  });
  
client.on('error', (err) => {
    console.log('Redis error: ', err);
  });

server.listen(PORT, () => {
    console.log("Server Start: " ,PORT);
})