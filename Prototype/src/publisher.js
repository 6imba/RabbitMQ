const { getConnection } = require('./helpers/connection');

(async function () {
  const connection = await getConnection();
  const channel = await connection.createChannel()
  console.log("🚀 http://localhost:15672 ~ file: publisher.js:7 ~ getConnection ~ connection", connection)
  const queue = 'aditya'
  channel.assertQueue(queue, {
    durable: false
  });
  const msg = 'Hello World'
  const bufferMsg = Buffer.from(msg);
  channel.sendToQueue(queue, bufferMsg);
})()
