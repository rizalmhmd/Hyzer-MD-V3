let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://zenzapis.xyz/randomimage/cosplay?apikey=f9fccfcff1', 'Nihh Om', wm, m)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler
