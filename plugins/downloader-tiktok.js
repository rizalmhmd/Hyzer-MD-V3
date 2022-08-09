let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await conn.sendFile(m.chat, link, 'tt.mp4', m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
