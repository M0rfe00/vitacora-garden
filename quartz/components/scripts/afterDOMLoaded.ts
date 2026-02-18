// carga el script de Instagram una sola vez
const script = document.createElement("script")
script.src = "https://www.instagram.com/embed.js"
script.async = true
document.head.appendChild(script)

// reprocesa embeds cuando Quartz navega internamente
document.addEventListener("nav", () => {
  // @ts-ignore
  window.instgrm?.Embeds?.process()
})