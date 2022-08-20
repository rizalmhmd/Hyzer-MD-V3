let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let kayes = `https://zenzapis.xyz/randomasupan/kayes?apikey=f9fccfcff1`
  conn.sendButtonImg(m.chat, kayes, 'Nih', wm2, 'Next', `.kayes`, m) 
}

handler.help = ['kayes']
handler.tags = ['asupan']
handler.command = /^(kayes)$/i

module.exports = handler
