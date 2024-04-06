const Redis = require("ioredis");
const redis = new Redis({
  path: "/home/azaw7185/tmp/redis.sock", // Replace with the actual path provided by your cPanel
});
module.exports = redis;
