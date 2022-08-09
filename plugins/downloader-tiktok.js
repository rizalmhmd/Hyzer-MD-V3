let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana ngenn?'
let res = await fetch(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=NezukoTachibana281207`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
let caption = { caption, name, thumb_img, link_dl1, }
    await conn.sendButtonVid(m.chat, json.result.link_dl1, caption, '@ZALLxBOTZ', `Thanks`, m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
