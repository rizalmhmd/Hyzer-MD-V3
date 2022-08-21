let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let husbu = `https://api.zacros.my.id/randomimg/husbu`
  conn.sendButtonImg(m.chat, husbu, 'Nih', wm2, 'Next', `.husbu`, m) 
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler
