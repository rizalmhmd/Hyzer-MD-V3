// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply(wait)
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `
*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler
