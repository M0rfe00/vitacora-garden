<%*
const usuario = await tp.system.prompt("Usuario de Twitter (sin @)")
const id = await tp.system.prompt("ID del tweet (solo los números del enlace)")
const texto = await tp.system.prompt("Texto del tweet (opcional)")
const fecha = await tp.system.prompt("Fecha del tweet (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))

const tweetURL = `https://x.com/${usuario}/status/${id}`

let output = `> [!tweet]+ Tweet de @${usuario} - [[${fecha}]]\n`
output += `> [Ver en Twitter](${tweetURL})\n`
if (texto && texto.trim() !== "") {
  output += `> ${texto}\n`
}

tR += output
%>