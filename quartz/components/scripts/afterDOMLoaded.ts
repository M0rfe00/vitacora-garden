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

// cargar script de X una sola vez
const twitterScript = document.createElement("script")
twitterScript.src = "https://platform.twitter.com/widgets.js"
twitterScript.async = true
document.head.appendChild(twitterScript)

// reprocesar embeds al navegar en Quartz
document.addEventListener("nav", () => {
  // @ts-ignore
  window.twttr?.widgets?.load()
})