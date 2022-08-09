let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Cari apa?'
let f = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=azzbot&query=${text}`)
let res = esult.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
duration: ${v.duration}
uploader: ${v.uploader}
link: ${v.link}`.trim()
    }).join('\n\n')
}

handler.help = ['caribokep']
handler.tags = ['asupan']
handler.command = /^(caribokep)$/i
handler.register = false



module.exports = handler
