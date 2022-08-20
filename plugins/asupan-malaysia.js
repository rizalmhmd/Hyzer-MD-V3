let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let malaysia = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, malaysia, 'Nih', wm2, 'NEXT', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler
