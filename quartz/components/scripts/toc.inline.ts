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

function renderTocHtmlHighlights() {
  const tocLinks = document.querySelectorAll<HTMLAnchorElement>(
    ".toc a[data-for]",
  )

  tocLinks.forEach((link) => {
    if (link.dataset.rendered === "true") return

    const raw = link.textContent
    if (!raw) return

    // 1. Decodificar HTML escapado
    const parser = new DOMParser()
    const decoded = parser.parseFromString(raw, "text/html").body.innerHTML

    // 2. Reinyectar HTML real (solo visual)
    link.innerHTML = decoded

    // 3. 🔑 FORZAR href correcto usando el slug REAL
    const slug = link.dataset.for
    if (slug) {
      link.setAttribute("href", `#${slug}`)
    }

    link.dataset.rendered = "true"
  })
}

// --- Evento principal de Quartz al cargar / navegar ---
document.addEventListener("nav", () => {
  setupToc()

  // 🔧 APLICACIÓN DEL FIX DE HIGHLIGHT EN TOC
  renderTocHtmlHighlights()

  // --- Observer original para resaltar sección activa ---
  observer.disconnect()
  const headers = document.querySelectorAll(
    "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]",
  )
  headers.forEach((header) => observer.observe(header))
})