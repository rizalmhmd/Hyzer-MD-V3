let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let vietnam = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, vietnam, 'Nih', wm2, 'NEXT', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler
