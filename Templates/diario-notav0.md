<%*
const type = await tp.system.prompt("Tipo de callout (Nota, Devlog, etc.)", "Nota")
const title = await tp.system.prompt("Título de la nota")
const date = await tp.system.prompt("Fecha de la entrada (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))
const review = await tp.system.prompt("Escribe tu entrada del diario")
tR += `> [!letterboxd]+ ${type}:  [${title}](${link})  - ${date}
> ![${title}](${poster}) 
> ${review}`
%>
