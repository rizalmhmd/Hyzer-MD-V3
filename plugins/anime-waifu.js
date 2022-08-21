let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let waifu = `https://api.zacros.my.id/randomimg/waifu`
  conn.sendButtonImg(m.chat, waifu, 'Nih', wm2, 'Next', `.waifu`, m) 
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler
