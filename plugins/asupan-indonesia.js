let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let indonesia = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, indonesia, 'Nih', wm2, 'NEXT', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i

module.exports = handler
