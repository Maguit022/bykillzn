import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐀𝐃𝐐𝐔𝐈𝐑𝐈𝐑 𝐀 𝐌𝐀𝐆𝐎𝐁𝐎𝐓 〙 ═
╠ *Hola Buenas Soy MagoBot*
╠ El Peecio de mi Bot es de 2.50 Soles 
╠ Tenemos la promocion de 3 grupos por 5 soles
╠ el bot es de uso permanente y no tendras que pagar  mensual mente
╠.....................................
╠ Tenemos casi todos los metode pago de distintos paises
╠ El numero de mi owner es +51972005505
╠═〘 𝐌𝐚𝐠𝐨𝐁𝐨𝐭 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐀𝐃𝐐𝐔𝐈𝐑𝐈𝐑 𝐀 𝐌𝐀𝐆𝐎𝐁𝐎𝐓',
body: '𝐍𝐨𝐭𝐉𝐡𝐮𝐳ᙆ  ᷦ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
}
handler.help = ['adquirir', 'speed']
handler.tags = ['adquirir', 'tools']
handler.command = /^(adquirir)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
