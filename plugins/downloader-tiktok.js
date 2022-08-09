let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonVid(m.chat, json.result.link_dl1, 'Nih Om', watermark, 'Thanks', `Thanks`, m)
}
handler.command = /^tiktok$/i
handler.tags = ['downloader']
handler.help = ['tiktok']
handler.limit = false
module.exports = handler
