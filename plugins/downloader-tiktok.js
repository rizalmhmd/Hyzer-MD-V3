let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=f9fccfcff1&url=${args[0]}`)
    if (!res.ok) throw await res.text()
let json = await res.json()
    await conn.sendButtonVid(m.chat, json.result.nowm, 'Nih Om', watermark, 'Thanks', `Thanks`, m)
}
handler.command = /^tiktok$/i
handler.tags = ['downloader']
handler.help = ['tiktok']
handler.limit = false
module.exports = handler
