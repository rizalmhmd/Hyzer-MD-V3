let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let milf = `https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=azzbot`
  conn.sendButtonImg(m.chat, milf, 'Nih', wm2, 'Next', `.milf`, m) 
}

handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler
