//=============『 Utama 』================== //
global.owner = ['6281333154367'] 
global.mods = [] 
global.prems = [''] 

//=============『 Info Owner 』============== //
global.nameowner = '𝚉𝚊𝚕𝚕'
global.numberowner = '6281333154367'
global.instagram = 'https://instagram.com/zallzall02'
global.github = 'https://github.com/rizalmhmd'
global.dana = '082322133457'
global.pulsa = '081333154367'
global.gopay = ''

//=============『 Info Bot 』=================//
global.namebot = '𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕'
global.gc = 'https://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS'
global.web = 'https://github.com/rizalmhmd' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = 'Permanen 15.000\n1 bulan 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/d6b8427c43c0bf596c1e2.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/d6b8427c43c0bf596c1e2.jpg' //ini juga ganti 
global.lolkey = 'ee99d6df5f8c5eaf7667a90d' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'f9fccfcff1' //ganti jadi apikey lu kalau expired
global.wm = '𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕'
global.watermark = wm
global.wm2 = '「 𝙕𝘼𝙇𝙇𝙭𝘽𝙊𝙏𝙕 」'
global.wm3 = '© 𝚉𝚊𝚕𝚕'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/d6b8427c43c0bf596c1e2.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*Stiker sedang dibuat*'
global.packname = 'Sticker By'
global.author = '© 𝚉𝚊𝚕𝚕'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
    // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
}
global.APIKeys = { // APIKey Here
// 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://zenzapis.xyz': 'f9fccfcff1',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': 'ee99d6df5f8c5eaf7667a90d',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
