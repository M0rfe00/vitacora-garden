import fs from "fs"
import Parser from "rss-parser"

const parser = new Parser({
  customFields: {
    item: [
      ["book_large_image_url", "book_large_image_url"],
      ["author_name", "author"],
    ],
  },
})

// Configura tus shelves y su RSS
const SHELVES = [
  { name: "literatura", rss: "https://www.goodreads.com/review/list_rss/181359667?shelf=literatura" },
  { name: "ensayo",     rss: "https://www.goodreads.com/review/list_rss/181359667?shelf=ensayo" }
]

// Función para capitalizar la primera letra
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const generateHTML = async () => {
  let html = `<div class="gr_widgets_wrapper">\n`

  for (const shelf of SHELVES) {
    // Parsear RSS de la shelf
    const feed = await parser.parseURL(shelf.rss)
    if (!feed.items || feed.items.length === 0) continue

    html += `<div class="gr_custom_container">\n`
    html += `<h3 class="gr_custom_header">${capitalize(shelf.name)}</h3>\n`

    // Generar cada libro
    feed.items.forEach(book => {
      html += `
      <div class="gr_custom_each_container">
        <div class="gr_custom_book_container">
          <img src="${book.book_large_image_url}" alt="${book.title}" />
        </div>
        <div class="gr_custom_title">
          <a href="${book.link}" target="_blank">${book.title}</a>
        </div>
        <div class="gr_custom_author">${book.author}</div>
      </div>
      `
    })

    html += `</div>\n` // cierre gr_custom_container
  }

  html += `</div>` // cierre gr_widgets_wrapper

  fs.writeFileSync("goodreads.html", html)
  console.log("✔ HTML de Goodreads generado: goodreads.html")
}

generateHTML()
