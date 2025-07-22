<%*
const title = await tp.system.prompt("Título de la película")
const link = await tp.system.prompt("Enlace a la ficha en Letterboxd")
const date = await tp.system.prompt("Fecha en la que la viste (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))

tR += `> [!letterboxd]+ Watched:  [${title}](${link})  - ${date}`
%>