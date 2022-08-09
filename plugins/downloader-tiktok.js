let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana ngenn?'
let res = await fetch(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=NezukoTachibana281207`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonVid(m.chat, json.result.link_dl1, '𝙉𝙖𝙢𝙖 : ${json.result.name}/n𝘾𝙖𝙥𝙩𝙞𝙤𝙣 : ${json.result.caption}', '@ZALLxBOTZ', `Thanks`, m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
