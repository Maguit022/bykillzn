import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆ 
✯〘MAGOBOT〙
✯ Algunos de los comandos tienen Fallos
✯╭──────────◆
✯│▢ʜᴏʟᴀ:${taguser}
✯│▢ᴏᴡɴᴇʀ:ᴏꜰᴄ➟ MAGO
✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/51972005505
✯│▢ғᴇᴄʜᴀ:${week}, ${date}
✯│▢ᴛɪᴇᴍᴘᴏ:ᴀᴄᴛɪᴠᴏ:${uptime}
✯│▢ᴜsᴜᴀʀɪᴏs:${rtotalreg}
 ✯╰───────────◆


*<𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋/>*

° ඬ ⃟ 💟 _.estado_
° ඬ ⃟ 💟 _.infobot_
° ඬ ⃟ 💟 _.grouplist_
° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

° ඬ⃟💎 _.kick *<@tag>*_
° ඬ⃟💎 _.grupo *<abrir / cerrar>*_
° ඬ⃟💎 _.promote *<@tag>*_
° ඬ⃟💎 _.demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _.demote *<@tag>*_
° ඬ⃟💎 _.infogroup_
° ඬ⃟💎 _.setname *<texto>*_
° ඬ⃟💎 _.setdesc *<texto>*_
° ඬ⃟💎 _.invocar *<texto>*_
° ඬ⃟💎 _.hidetag *<texto>*_

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟👑 _.enable *restrict*_
° ඬ⃟👑 _.disable *restrict*_
° ඬ⃟👑 _.enable *autoread*_
° ඬ⃟👑 _.disable *autoread*_
° ඬ⃟👑 _.enable *public*_
° ඬ⃟👑 _.disable *public*_
° ඬ⃟👑 _.enable *pconly*_
° ඬ⃟👑 _.disable *pconly*_
° ඬ⃟👑 _.enable *gconly*_
° ඬ⃟👑 _.disable *gconly*_
° ඬ⃟👑 _.banchat_
° ඬ⃟👑 _.unbanchat_
° ඬ⃟👑 _.bcchats *<texto>*_
° ඬ⃟👑 _.bcgc *<texto>*_

let buttons = [
{ buttonId: '.owner', buttonText: { displayText: '🧿ᴏᴡɴᴇʀ🏓' }, type: 1 },
{ buttonId: '.infobot', buttonText: { displayText: '🔮ɪɴꜰᴏʙᴏᴛ⛄' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '🧿MAGO BOT🏓',
body: null,
thumbnail: img,
sourceUrl: `https://youtube.com`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙷𝚘𝚕𝚊 𝙴𝚕 𝙼𝚎𝚗𝚞 𝚜𝚎 𝙴𝚜𝚝𝚊 𝙿𝚛𝚘𝚌𝚎𝚜𝚊𝚗𝚍𝚘 , 𝙿𝚘𝚛𝙵𝚊𝚟𝚘𝚛 𝙴𝚜𝚙𝚎𝚛𝚊.........*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}