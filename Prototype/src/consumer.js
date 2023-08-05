const { getConnection } = require("./helpers/connection");

async function consume(){
  const conn = await getConnection();

  const channel = await conn.createChannel();
  const queue = 'aditya'
  


}

consume();
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';

    channel.assertQueue(queue, {
      durable: false
    });
  });
});
