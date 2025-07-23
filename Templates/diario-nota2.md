<%*
const type = await tp.system.prompt("Tipo de nota (Nota, Devlog, Reflexión, etc.)", "Nota")
const title = await tp.system.prompt("Título de la nota")
const date = await tp.system.prompt("Fecha de la entrada (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"))
const content = await tp.system.prompt("Escribe el contenido de la nota")
const tags = await tp.system.prompt("Etiquetas separadas por comas (opcional)", "")

// Mapa de emojis por tipo de nota
const iconMap = {
  "nota": "📝",
  "devlog": "🛠️",
  "reflexión": "💭",
  "idea": "💡",
  "tarea": "✅"
}

const wordCount = content.trim().split(/\s+/).length
const readingTime = Math.max(1, Math.ceil(wordCount / 200))

const formattedTags = tags
  ? tags.split(",").map(tag => `#${tag.trim().replace(/^#/, "")}`).join(" ")
  : ""

const emoji = iconMap[type.toLowerCase()] || "📌"  // icono por defecto
const displayTags = formattedTags ? `\n> 🏷️ ${formattedTags}` : ""

tR += `> [!${type.toLowerCase()}]+ ${emoji} ${type}: **${title} 📅** ${date} · ⏱️ ${readingTime} min\n>\n> ${content}${displayTags}`
%>
