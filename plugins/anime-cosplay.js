let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let nyenye = `https://zenzapis.xyz/randomimage/cosplay?apikey=f9fccfcff1`
  conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.cosplay`, m) 
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler
