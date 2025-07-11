import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// import style from "./styles/feed.scss"

const Feed = ({ allFiles, displayClass }: QuartzComponentProps) => {
  console.log("allFiles:", allFiles); // <--- Añade esto para depurar

const posts = allFiles.filter(f => true)

  console.log("posts encontrados:", posts); // <--- También esto
 console.log("allFiles:", allFiles);

  return (
    <div class={classNames(displayClass, "feed")}>
      {posts.map(post => (
        <div class="feed-entry" id={post.slug}>
          <h3>{post.frontmatter?.title ?? post.slug}</h3>
          <p class="date">{post.dates?.created ?? post.dates?.modified ?? "Sin fecha"}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
        </div>
      ))}
    </div>
  )
}

export default (() => Feed) satisfies QuartzComponentConstructor