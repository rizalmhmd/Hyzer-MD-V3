let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let hijaber = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, hijaber, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler
