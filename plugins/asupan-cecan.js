let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let cecan = 'https://api.lolhuman.xyz/api/random/cecan?apikey=azzbot'
    conn.sendButtonImg(m.chat, cecan, 'Nih', wm2, 'NEXT', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

module.exports = handler
