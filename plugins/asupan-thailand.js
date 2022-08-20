let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let thailand = 'https://api.zacros.my.id/asupan/thailand'
    conn.sendButtonImg(m.chat, thailand, 'Nih', wm2, 'NEXT', '.thailand', m)
}
handler.help = ['thailand']
handler.tags = ['asupan']
handler.command = /^(thailand)$/i

module.exports = handler
