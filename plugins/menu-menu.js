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
✯〘*@bykillzn*〙
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

*<𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆/>*

° ඬ⃟👽 _.join *<enlace / link / url>*_

*<𝕁𝕌𝔼𝔾𝕆𝕊/>*

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

*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*

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

*<ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊/>*

° ඬ⃟🔰 _.reporte *<texto>*_

*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*

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

*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

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

*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟🧧 _.toimg *<responde a un sticker>*_
° ඬ⃟🧧 _.tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _.toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _.tovideo *<responde a un audio>*_
° ඬ⃟🧧 _.tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _.tts es *<texto>*_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*

° ඬ⃟🖍️ _.logos *<efecto> <texto>*_
° ඬ⃟🖍️ _.simpcard *<@tag>*_
° ඬ⃟🖍️ _.hornycard *<@tag>*_
° ඬ⃟🖍️ _.lolice *<@tag>*_
° ඬ⃟🖍️ _.ytcomment *<texto>*_
° ඬ⃟🖍️ _.itssostupid_
° ඬ⃟🖍️ _.pixelar_
° ඬ⃟🖍️ _.blur_

*<ℝ𝔸ℕ𝔻𝕆𝕄/>*

° ඬ⃟👾 _.cristianoronaldo_
° ඬ⃟👾 _.messi_
° ඬ⃟👾 _.meme_
° ඬ⃟👾 _.itzy_
° ඬ⃟👾 _.blackpink_
° ඬ⃟👾 _.kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 _.lolivid_
° ඬ⃟👾 _.loli_
° ඬ⃟👾 _.navidad_
° ඬ⃟👾 _.ppcouple_
° ඬ⃟👾 _.neko_
° ඬ⃟👾 _.waifu_
° ඬ⃟👾 _.akira_
° ඬ⃟👾 _.akiyama_
° ඬ⃟👾 _.anna_
° ඬ⃟👾 _.asuna_
° ඬ⃟👾 _.ayuzawa_
° ඬ⃟👾 _.boruto_
° ඬ⃟👾 _.chiho_
° ඬ⃟👾 _.chitoge_
° ඬ⃟👾 _.deidara_
° ඬ⃟👾 _.erza_
° ඬ⃟👾 _.elaina_
° ඬ⃟👾 _.eba_
° ඬ⃟👾 _.emilia_
° ඬ⃟👾 _.hestia_
° ඬ⃟👾 _.hinata_
° ඬ⃟👾 _.inori_
° ඬ⃟👾 _.isuzu_
° ඬ⃟👾 _.itachi_
° ඬ⃟👾 _.itori_
° ඬ⃟👾 _.kaga_
° ඬ⃟👾 _.kagura_
° ඬ⃟👾 _.kaori_
° ඬ⃟👾 _.keneki_
° ඬ⃟👾 _.kotori_
° ඬ⃟👾 _.kurumi_
° ඬ⃟👾 _.madara_
° ඬ⃟👾 _.mikasa_
° ඬ⃟👾 _.miku_
° ඬ⃟👾 _.minato_
° ඬ⃟👾 _.naruto_
° ඬ⃟👾 _.nezuko_
° ඬ⃟👾 _.sagiri_
° ඬ⃟👾 _.sasuke_
° ඬ⃟👾 _.sakura_
° ඬ⃟👾 _.cosplay_

*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

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

*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

° ඬ⃟📳 _.start_
° ඬ⃟📳 _.next_
° ඬ⃟📳 _.leave_

*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

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

*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

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

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _.afk *<motivo>*_
° ඬ⃟🛠️ _.acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _.calc *<operacion math>*_
° ඬ⃟🛠️ _.del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _.qrcode *<texto>*_
° ඬ⃟🛠️ _.readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _.spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _.styletext *<texto>*_
° ඬ⃟🛠️ _.traducir *<texto>*_

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

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

*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

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

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

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
° ඬ⃟👑 _.listprem_`.trim()
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: 'ADQUIRIR' }, type: 1 }]
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
title: '*@bykillzn*',
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