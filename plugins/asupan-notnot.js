let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let notnot = `https://zenzapis.xyz/randomasupan/notnot?apikey=f9fccfcff1`
  conn.sendButtonImg(m.chat, notnot, 'Nih', wm2, 'Next', `.notnot`, m) 
}

handler.help = ['notnot']
handler.tags = ['asupan']
handler.command = /^(notnot)$/i

module.exports = handler
