let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let korea = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, korea, 'Nih', wm2, 'NEXT', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler

