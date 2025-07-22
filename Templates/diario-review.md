<%*
const type = await tp.system.prompt("Tipo de callout (Review, Crítica, etc.)", "Review")
const title = await tp.system.prompt("Título de la película")
const link = await tp.system.prompt("Enlace a la review")
const poster = await tp.system.prompt("Enlace al póster de la película")
const date = await tp.system.prompt("Fecha de la entrada (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))
const review = await tp.system.prompt("Escribe tu reseña")

tR += `> [!letterboxd]+ ${type}:  [${title}](${link})  - ${date}`
> ![${title}](${poster}) 
> ${review}`
%>
