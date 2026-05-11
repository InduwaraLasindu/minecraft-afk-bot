const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'louvregrade12.aternos.me',
    port: 29642,
    username: 'AFK_Bot',
    version: '1.21.1'
  })

  bot.on('login', () => {
    console.log('Bot logged in!')
  })

  bot.on('spawn', () => {
    console.log('Bot spawned!')

    setInterval(() => {
      bot.swingArm()
    }, 30000)
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)

  bot.on('end', () => {
    console.log('Disconnected! Reconnecting...')
    setTimeout(createBot, 10000)
  })
}

createBot()
