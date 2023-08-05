var amqp = require('amqplib');

async function getConnection(rabbitMqConfig) {
  try {
    const connection = await amqp.connect(rabbitMqConfig);
    return connection;

  } catch (error) {
    console.error('Error connecting to rabbitmq!')
    throw new Error('Error connecting to rabbitmq!')

  }
}

module.exports = { getConnection }
