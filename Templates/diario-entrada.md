<%*
const date = tp.date.now("YYYY-MM-DD")
const title = await tp.system.prompt("Título de la entrada (opcional)", "")
const tags = await tp.system.prompt("Etiquetas separadas por comas (opcional)", "")
const content = await tp.system.prompt("Escribe tu entrada del diario")

const wordCount = content.trim().split(/\s+/).length
const readingTime = Math.max(1, Math.ceil(wordCount / 200))

const formattedTags = tags
  ? tags.split(",").map(tag => `#${tag.trim().replace(/^#/, "")}`).join(" ")
  : ""

const displayTitle = title ? `📝 <strong>${title}</strong><br>` : ""
const displayTags = formattedTags ? `<br><small>🏷️ ${formattedTags}</small>` : ""

tR += `
<div class="diario">
  <strong>📅 ${date}</strong> — ⏱️ <em>${readingTime} min</em><br>${displayTitle}<br>
  ${content}
  ${displayTags}
</div>
`
%>
