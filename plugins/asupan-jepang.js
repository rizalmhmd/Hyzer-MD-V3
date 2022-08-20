let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let jepang = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, jepang, 'Nih', wm2, 'NEXT', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i

module.exports = handler

