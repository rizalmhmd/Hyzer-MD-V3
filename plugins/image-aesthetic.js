let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let aesthetic = `https://zenzapis.xyz/randomimage/aesthetic?apikey=f9fccfcff1}`
    conn.sendButtonImg(m.chat, aesthetic, 'Nih', wm2, 'NEXT', '.aesthetic', m)
}
handler.help = ['aesthetic']
handler.tags = ['random', 'image']
handler.command = /^(aesthetic)$/i

module.exports = handler
