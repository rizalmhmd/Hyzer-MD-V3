let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let loli = 'https://api.lolhuman.xyz/api/random/loli?apikey=azzbot'
    conn.sendButtonImg(m.chat, loli, 'Nih', wm2, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
