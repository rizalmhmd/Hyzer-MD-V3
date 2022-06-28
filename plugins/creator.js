let handler = async(m, { conn }) => {
conn.sendContact(m.chat, 6285822347348, ArullOfc, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
