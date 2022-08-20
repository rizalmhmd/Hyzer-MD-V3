let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let nyenye = `https://zenzapis.xyz/randomanime/milf?apikey=f9fccfcff1`
  conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.milf`, m) 
}

handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler
