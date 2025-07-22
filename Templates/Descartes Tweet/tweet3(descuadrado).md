<%*
const defaultUser = "Lookass333"
const usuario = await tp.system.prompt("Usuario (sin @)", defaultUser)
const urlCompleta = await tp.system.prompt("Enlace completo al tweet (ejemplo: https://x.com/Lookass333/status/1933203246757073131)")

const idMatch = urlCompleta.match(/status\/(\d+)/)
const id = idMatch ? idMatch[1] : ""

if (!id) {
  throw "No se pudo extraer el ID del tweet del enlace proporcionado."
}

const fecha = await tp.system.prompt("Fecha del tweet (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))
const imgFileName = await tp.system.prompt("Nombre del archivo de imagen (ejemplo: tweet-1933203246757073131.png)")

const basePath = "../media-content/Diario/Tweets"
const imgPath = `${basePath}/${imgFileName}`

const tweetURL = `https://x.com/${usuario}/status/${id}`

tR += `> [!tweet]+ Tweet - [[${fecha}]]
> <a href="${tweetURL}"><img src="${imgPath}" alt="Tweet" style="border-radius: 12px; margin: 0; display: block; max-width: 100%;"></a>`
%>
