let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana ngenn?'
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=azzbot&url=${args[0]}`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.audio, m)
}

handler.help = ['tiktokmp3 <url>']
handler.tags = ['downloader']
handler.command = /^tiktokmp3$/i


module.exports = handler
