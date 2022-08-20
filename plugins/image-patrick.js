let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let nyenye = `https://zenzapis.xyz/randomimage/patrick?apikey=f9fccfcff1`
  conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.patrick`, m) 
}


handler.help = ['patrick']
handler.tags = ['image']
handler.command = /^(patrick)$/i

module.exports = handler
