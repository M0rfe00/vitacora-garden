import fs from "fs"
import Parser from "rss-parser"

const parser = new Parser({
  customFields: {
    item: [
      ["user_shelves", "user_shelves", { keepArray: true }],
      ["book_large_image_url", "book_large_image_url"],
      ["author_name", "author"],
    ],
  },
})

const RSS_URL = "https://www.goodreads.com/review/list_rss/181359667"
const SHELVES = ["literatura", "ensayo"] // Ajusta aquí tus shelves

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/(^-|-$)/g, "")

const generateHTML = async () => {
  const feed = await parser.parseURL(RSS_URL)

  let html = `<div class="gr_widgets_wrapper">\n`

  for (const shelf of SHELVES) {
    const books = feed.items
      .filter(item => {
        if (!item.user_shelves) return false
        const itemShelves = item.user_shelves.map(s => s?.$?.name?.toLowerCase())
        return itemShelves.includes(shelf)
      })

    html += `<div class="gr_custom_container">\n`
    html += `<h3 class="gr_custom_header">${shelf.charAt(0).toUpperCase() + shelf.slice(1)}</h3>\n`

    books.forEach(book => {
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
