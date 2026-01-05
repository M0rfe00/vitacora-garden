// =======================
// TOC INLINE SCRIPT (Quartz)
// =======================

// --- Observador para resaltar entradas del TOC según scroll ---
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElements.length > 0) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElements.forEach((tocEntryElement) =>
          tocEntryElement.classList.add("in-view"),
        )
      } else {
        tocEntryElements.forEach((tocEntryElement) =>
          tocEntryElement.classList.remove("in-view"),
        )
      }
    }
  }
})

// --- Toggle del TOC (original) ---
function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

// --- Setup del TOC (original) ---
function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

/* ============================================================
   MODIFICACIÓN: Renderizar HTML real en los títulos del TOC
   ------------------------------------------------------------
   Problema:
   - Los títulos con ==highlight== llegan escapados como texto:
     &lt;span class="text-highlight"&gt;...&lt;/span&gt;

   Solución:
   - Decodificar entidades HTML
   - Reinyectarlas como HTML real
   - SOLO en el TOC
   - Ejecutado en el evento `nav`
   ============================================================ */

function renderTocHtmlHighlightsAndFixSlugs() {
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>(
    ".toc a[data-for]",
  )

  tocLinks.forEach((link) => {
    if (link.dataset.rendered === "true") return

    const raw = link.textContent
    if (!raw) return

    // Decodifica HTML
    const parser = new DOMParser()
    const decoded = parser.parseFromString(raw, "text/html").body.innerHTML
    link.innerHTML = decoded

    // 🔑 Generar slug limpio automáticamente
    const slug = decoded
      .replace(/<[^>]*>/g, "")  // elimina etiquetas HTML
      .normalize("NFD")          // elimina acentos
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")      // espacios → guiones
      .replace(/[^\w-]+/g, "")   // caracteres no alfanuméricos
    link.setAttribute("href", `#${slug}`)

    // 🔑 Aseguramos que el encabezado también tenga este id
    const targetHeader = document.getElementById(link.dataset.for!)
    if (targetHeader) {
      targetHeader.id = slug
    }

    link.dataset.rendered = "true"
  })
}


// --- Evento principal de Quartz al cargar / navegar ---
document.addEventListener("nav", () => {
  setupToc()

  // 🔧 APLICACIÓN DEL FIX DE HIGHLIGHT EN TOC
  renderTocHtmlHighlightsAndFixSlugs()  // <<== CORREGIDO

  // --- Observer original para resaltar sección activa ---
  observer.disconnect()
  const headers = document.querySelectorAll(
    "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]",
  )
  headers.forEach((header) => observer.observe(header))
})