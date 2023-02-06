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
┃ ✯〘MAGOBOT〙
┃ ✯ Algunos de los comandos tienen Fallos
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${taguser}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏꜰᴄ➟ MAGO
┃ ✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/51972005505
┃ ✯│▢ғᴇᴄʜᴀ:${week}, ${date}
┃ ✯│▢ᴛɪᴇᴍᴘᴏ:ᴀᴄᴛɪᴠᴏ:${uptime}
┃ ✯│▢ᴜsᴜᴀʀɪᴏs:${rtotalreg}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐈𝐍𝐅𝐎 𝐁𝐎𝐓----⦿
┃ ✯╭──────────◆
° ඬ ⃟ 💟 _.estado_
° ඬ ⃟ 💟 _.infobot_
° ඬ ⃟ 💟 _.grouplist_
° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑-⦿
┃ ✯╭──────────◆
° ඬ⃟☑️ _.enable *welcome*_
° ඬ⃟☑️ _.disable *welcome*_
° ඬ⃟☑️ _.enable *modohorny*_
° ඬ⃟☑️ _.disable *modohorny*_
° ඬ⃟☑️ _.enable *antilink*_
° ඬ⃟☑️ _.disable *antilink*_
° ඬ⃟☑️ _.enable *antilink2*_
° ඬ⃟☑️ _.disable *antilink2*_
° ඬ⃟☑️ _.enable *detect*_
° ඬ⃟☑️ _.disable *detect*_
° ඬ⃟☑️ _.enable *audios*_
° ඬ⃟☑️ _.disable *audios*_
° ඬ⃟☑️ _.enable *autosticker*_
° ඬ⃟☑️ _.disable *autosticker*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐑𝐄𝐏𝐎𝐑𝐓𝐄 𝐄𝐑𝐑𝐎𝐑𝐄𝐒-⦿
┃ ✯╭──────────◆
┃ ✯│▢/ʀᴇᴘᴏʀᴛᴇ➟ᴛᴇxᴛᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-AUDIOS - AUDIOS-⦿
┃ ✯╭──────────◆
° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒----⦿
┃ ✯╭──────────◆
° ඬ⃟📥 _.facebook *<enlace / link / url>*_
° ඬ⃟📥 _.instagram *<enlace / link / url>*_
° ඬ⃟📥 _.mediafire *<enlace / link / url>*_
° ඬ⃟📥 _.instagram *<enlace / link / url>*_
° ඬ⃟📥 _.gitclone *<enlace / link / url>*_
° ඬ⃟📥 _.gdrive *<enlace / link / url>*_
° ඬ⃟📥 _.tiktok *<enlace / link / url>*_
° ඬ⃟📥 _.xnxxdl *<enlace / link / url>*_
° ඬ⃟📥 _.xvideosdl *<enlace / link / url>*_
° ඬ⃟📥 _.ytmp3 *<enlace / link / url>*_
° ඬ⃟📥 _.ytmp4 *<enlace / link / url>*_
° ඬ⃟📥 _.ytmp3doc *<enlace / link / url>*_
° ඬ⃟📥 _.ytmp4doc *<enlace / link / url>*_
° ඬ⃟📥 _.play.1 *<texto / enlace / link / url>*_
° ඬ⃟📥 _.play.2 *<texto / enlace / link / url>*_
° ඬ⃟📥 _.play *<texto>*_
° ඬ⃟📥 _.playdoc *<texto>*_
° ඬ⃟📥 _.playlist *<texto>*_
° ඬ⃟📥 _.playlist2 *<texto>*_
° ඬ⃟📥 _.spotify *<texto>*_
° ඬ⃟📥 _.imagen *<texto>*_
° ඬ⃟📥 _.pinteret *<texto>*_
° ඬ⃟📥 _.wallpaper *<texto>*_
° ඬ⃟📥 _.wallpaper2 *<texto>*_
° ඬ⃟📥 _.pptiktok *<nombre de usuario>*_
° ඬ⃟📥 _.igstalk *<nombre de usuario>*_
° ඬ⃟📥 _.igstory *<nombre de usuario>*_
° ඬ⃟📥 _.tiktokstalk *<nombre de usuario>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐆𝐑𝐔𝐏𝐎𝐒----⦿
┃ ✯╭──────────◆
° ඬ⃟💎 _.add *<numero>*_
° ඬ⃟💎 _.kick *<@tag>*_
° ඬ⃟💎 _.grupo *<abrir / cerrar>*_
° ඬ⃟💎 _.promote *<@tag>*_
° ඬ⃟💎 _.demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _.demote *<@tag>*_
° ඬ⃟💎 _.infogroup_
° ඬ⃟💎 _.link_
° ඬ⃟💎 _.setname *<texto>*_
° ඬ⃟💎 _.setdesc *<texto>*_
° ඬ⃟💎 _.invocar *<texto>*_
° ඬ⃟💎 _.setwelcome *<texto>*_
° ඬ⃟💎 _.setbye *<texto>*_
° ඬ⃟💎 _.hidetag *<texto>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐉𝐔𝐄𝐆𝐎𝐒----⦿
┃ ✯╭──────────◆
° ඬ⃟🎖️ _.mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
° ඬ⃟🎖️ _.ppt *<papel / tijera /piedra>*_
° ඬ⃟🎖️ _.prostituto *<nombre / @tag>*_
° ඬ⃟🎖️ _.prostituta *<nombre / @tag>*_
° ඬ⃟🎖️ _.gay2 *<nombre / @tag>*_
° ඬ⃟🎖️ _.lesbiana *<nombre / @tag>*_
° ඬ⃟🎖️ _.pajero *<nombre / @tag>*_
° ඬ⃟🎖️ _.pajera *<nombre / @tag>*_
° ඬ⃟🎖️ _.puto *<nombre / @tag>*_
° ඬ⃟🎖️ _.puta *<nombre / @tag>*_
° ඬ⃟🎖️ _.manco *<nombre / @tag>*_
° ඬ⃟🎖️ _.manca *<nombre / @tag>*_
° ඬ⃟🎖️ _.rata *<nombre / @tag>*_
° ඬ⃟🎖️ _.love *<nombre / @tag>*_
° ඬ⃟🎖️ _.doxear *<nombre / @tag>*_
° ඬ⃟🎖️ _.pregunta *<texto>*_
° ඬ⃟🎖️ _.slot *<apuesta>*_
° ඬ⃟🎖️ _.pvp *<@tag>*_
° ඬ⃟🎖️ _.simi *<texto>*_
° ඬ⃟🎖️ _.topgays_
° ඬ⃟🎖️ _.topotakus_
° ඬ⃟🎖️ _.formarpareja_
° ඬ⃟🎖️ _.verdad_
° ඬ⃟🎖️ _.reto_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒-⦿
┃ ✯╭──────────◆
° ඬ⃟🧧 _.toimg *<responde a un sticker>*_
° ඬ⃟🧧 _.tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _.toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _.tovideo *<responde a un audio>*_
° ඬ⃟🧧 _.tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _.tts es *<texto>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒-⦿
┃ ✯╭──────────◆
° ඬ⃟🖍️ _.logos *<efecto> <texto>*_
° ඬ⃟🖍️ _.simpcard *<@tag>*_
° ඬ⃟🖍️ _.hornycard *<@tag>*_
° ඬ⃟🖍️ _.lolice *<@tag>*_
° ඬ⃟🖍️ _.ytcomment *<texto>*_
° ඬ⃟🖍️ _.itssostupid_
° ඬ⃟🖍️ _.pixelar_
° ඬ⃟🖍️ _.blur_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒-⦿
┃ ✯╭──────────◆
° ඬ⃟🎤 _.bass_
° ඬ⃟🎤 _.blown_
° ඬ⃟🎤 _.deep_
° ඬ⃟🎤 _.earrape_
° ඬ⃟🎤 _.fast_
° ඬ⃟🎤 _.fat_
° ඬ⃟🎤 _.nightcore_
° ඬ⃟🎤 _.reverse_
° ඬ⃟🎤 _.robot_
° ඬ⃟🎤 _.slow_
° ඬ⃟🎤 _.smooth_
° ඬ⃟🎤 _.tupai_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯--𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎--⦿
┃ ✯╭──────────◆
┃ ✯│▢/sᴛᴀʀᴛ
┃ ✯│▢/ɴᴇxᴛ
┃ ✯│▢/ʟᴇᴀᴠᴇ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒----⦿
┃ ✯╭──────────◆
° ඬ⃟🔍 _.xnxxsearch *<texto>*_
° ඬ⃟🔍 _.animeinfo *<texto>*_
° ඬ⃟🔍 _.google *<texto>*_
° ඬ⃟🔍 _.letra *<texto>*_
° ඬ⃟🔍 _.wikipedia *<texto>*_
° ඬ⃟🔍 _.ytsearch *<texto>*_
° ඬ⃟🔍 _.apkdone *<texto>*_
° ඬ⃟🔍 _.apkgoogle *<texto>*_
° ඬ⃟🔍 _.apkmody *<texto>*_
° ඬ⃟🔍 _.apkshub *<texto>*_
° ඬ⃟🔍 _.happymod *<texto>*_
° ඬ⃟🔍 _.hostapk *<texto>*_
° ඬ⃟🔍 _.revdl *<texto>*_
° ඬ⃟🔍 _.toraccino *<texto>*_
° ඬ⃟🔍 _.uapkpro *<texto>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯--𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒--⦿
┃ ✯╭──────────◆
° ඬ⃟🛠️ _.afk *<motivo>*_
° ඬ⃟🛠️ _.acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _.calc *<operacion math>*_
° ඬ⃟🛠️ _.del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _.qrcode *<texto>*_
° ඬ⃟🛠️ _.readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _.spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _.styletext *<texto>*_
° ඬ⃟🛠️ _.traducir *<texto>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐒𝐓𝐈𝐊𝐄𝐑𝐒 ----⦿
┃ ✯╭──────────◆
° ඬ⃟👽 _.sticker *<responder a imagen o video>*_
° ඬ⃟👽 _.sticker *<enlace / link / url>*_
° ඬ⃟👽 _.s *<responder a imagen o video>*_
° ඬ⃟👽 _.s *<enlace / link / url>*_
° ඬ⃟👽 _.emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _.semoji *<tipo> <emoji>*_
° ඬ⃟👽 _.attp *<texto>*_
° ඬ⃟👽 _.ttp *<texto>*_
° ඬ⃟👽 _.pat *<@tag>*_
° ඬ⃟👽 _.slap *<@tag>_
° ඬ⃟👽 _.kiss *<@tag>*_
° ඬ⃟👽 _.dado_
° ඬ⃟👽 _.wm *<packname> <author>*_
° ඬ⃟👽 _.stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _.stickerfilter *<efecto> <responder a imagen>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----RPG----⦿
┃ ✯╭──────────◆
° ඬ⃟💵 _.balance_
° ඬ⃟💵 _.claim_
° ඬ⃟💵 _.top_
° ඬ⃟💵 _.levelup_
° ඬ⃟💵 _.myns_
° ඬ⃟💵 _.perfil_
° ඬ⃟💵 _.work_
° ඬ⃟💵 _.minar_
° ඬ⃟💵 _.buy_
° ඬ⃟💵 _.buyall_
° ඬ⃟💵 _.transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _.verificar_
° ඬ⃟💵 _.unreg *<numero de serie>*_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐎𝐖𝐍𝐄𝐑----⦿
┃ ✯╭──────────◆
° ඬ⃟👑 _.cajafuerte_
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
° ඬ⃟👑 _.banuser *<@tag>*_
° ඬ⃟👑 _.unbanuser *<@tag>*_
° ඬ⃟👑 _.banuser *<@tag>*_
° ඬ⃟👑 _.bc *<texto>*_
° ඬ⃟👑 _.bcchats *<texto>*_
° ඬ⃟👑 _.bcgc *<texto>*_
° ඬ⃟👑 _.cleartpm_
° ඬ⃟👑 _.restart_
° ඬ⃟👑 _.update_
° ඬ⃟👑 _.addprem *<@tag>*_
° ඬ⃟👑 _.delprem *<@tag>*_
° ඬ⃟👑 _.listprem_
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷`.trim()
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