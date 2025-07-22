<%*
const type = await tp.system.prompt("Tipo de callout (Review, Crítica, Comentario...)", "Review")
const title = await tp.system.prompt("Título de la película")
const link = await tp.system.prompt("Enlace a la ficha en Letterboxd")
const date = await tp.system.prompt("Fecha en la que la viste (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))
const review = await tp.system.prompt("Escribe tu comentario o reseña")

tR += `> [!letterboxd]+ ${type}:  [${title}](${link})  - [[${date}]]
> ${review}`
%>
