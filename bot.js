const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'matheesha805911.aternos.me',
    port: 55695,
    username: 'AFK_Bot',
    version: '1.21.11'
  })

  bot.on('login', () => {
    console.log('LOGIN OK')
  })

  bot.on('spawn', () => {
    console.log('SPAWN OK')

    // Jump every 30 seconds
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }, 30000)

    // Look around every 10 seconds
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2
      const pitch = (Math.random() - 0.5) * 0.5

      bot.look(yaw, pitch, true)
    }, 10000)
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('error', (err) => {
    console.log('ERROR:', err)
  })

  bot.on('end', () => {
    console.log('Disconnected! Reconnecting in 10 seconds...')

    setTimeout(() => {
      createBot()
    }, 10000)
  })
}

createBot()
