let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let tits = `https://api.lolhuman.xyz/api/random2/tits?apikey=azzbot`
  conn.sendButtonImg(m.chat, tits, 'Nih', wm2, 'Next', `.tits`, m) 
}


handler.help = ['tits']
handler.tags = ['nsfw']
handler.command = /^(tits)$/i

module.exports = handler
