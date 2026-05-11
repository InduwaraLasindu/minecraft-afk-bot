const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'louvregrade12.aternos.me',
    port: 29642,
    username: 'AFK_Bot',
    version: '1.21.11'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)

  bot.on('end', () => {
    console.log('Reconnecting...')
    setTimeout(createBot, 10000)
  })
}

createBot()
