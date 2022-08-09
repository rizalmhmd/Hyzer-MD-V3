let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
await conn.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }



handler.help = ['tiktokmp3 <url>']
handler.tags = ['downloader']
handler.command = /^tiktokmp3$/i


module.exports = handler
