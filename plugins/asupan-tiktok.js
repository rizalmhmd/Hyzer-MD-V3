let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let asupantiktok = `https://zenzapis.xyz/randomasupan/asupantiktok?apikey=f9fccfcff1`
  conn.sendButtonVid(m.chat, asupantiktok, 'Nih', wm2, 'Next', `.asupantiktok`, m) 
}

handler.help = ['asupantiktok']
handler.tags = ['random']
handler.command = /^(asupantiktok)$/i

module.exports = handler
