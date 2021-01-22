let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: [0812-4922-7786]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281249227786
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
