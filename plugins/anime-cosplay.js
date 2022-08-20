let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let cosplay = `https://api.zacros.my.id/randomimg/cosplay`
  conn.sendButtonImg(m.chat, cosplay, 'Nih', wm2, 'Next', `.cosplay`, m) 
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

module.exports = handler
