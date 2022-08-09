let fetch = require('node-fetch')
  if (command == 'caribokep') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
try {
let f = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=azzbot&query=${text}`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
duration: ${v.duration}
uploader: ${v.uploader}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
}

handler.help = ['caribokep']
handler.tags = ['asupan']
handler.command = /^(caribokep)$/i
handler.register = true



module.exports = handler
