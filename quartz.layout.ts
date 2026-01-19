import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Mostrar notas del diario solo en la página "diario.md"
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Diario",
        limit: undefined, // sin límite
        showTags: false,
        linkToMore: undefined,
        filter: (f) => f.frontmatter?.tags?.includes("diario") ?? false,
        sort: (f1, f2) => {
          const dateA = new Date(f1.dates?.created ?? f1.dates?.modified ?? 0).getTime()
          const dateB = new Date(f2.dates?.created ?? f2.dates?.modified ?? 0).getTime()
          return dateB - dateA
        },
      }),
      condition: (page) => page.fileData.slug === "diario",
    }),
    // Para el resto de páginas
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      filterFn: (node) => {
        const carpetasOcultas = ['Carpeta', 'Recursos-SMR(fd)', 'carpeta','Cine-Ver']
        if (node.isFolder) {
          const folderName = (node as any)?.fileSegmentHint ?? ""
          if (carpetasOcultas.includes(folderName)) return false
        }
        const tags = (node.data as any)?.tags
        if (Array.isArray(tags) && tags.includes('hideInExplorer')) return false
        return true
      },
    }),
  ],


  right: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 2,
        scale: 2.75,
        fontSize: 1.2, // what size should the node labels be?
        centerForce: 0.1, // how much force to use when trying to center the nodes
        removeTags: ["hideInExplorer"],
        enableRadial: true,
        
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 3,
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 1.5, // how much force to use when trying to center the nodes
        removeTags: ["hideInExplorer"],
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}


// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
  spacerSymbol: "❯", // symbol between crumbs
  rootName: "VitaCora", // name of first/root element
  resolveFrontmatterTitle: true, // whether to resolve folder names through frontmatter titles
  showCurrentPage: true, // whether to display the current page in the breadcrumbs
}
    ),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}






