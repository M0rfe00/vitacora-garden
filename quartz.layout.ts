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
  title: "", // title of the explorer component
  folderClickBehavior: "collapse", // qué pasa al clicar en una carpeta
  folderDefaultState: "collapsed", // estado inicial de carpetas
  useSavedState: true, // guardar estado localmente
filterFn: (node) => {
  // Ocultar carpetas específicas por nombre
  const carpetasOcultas = ['Carpeta', 'Recursos-SMR(fd)', 'carpeta']

  if (node.isFolder) {
    const folderName = (node as any)?.fileSegmentHint ?? ""
    if (carpetasOcultas.includes(folderName)) return false
  }

  // Ocultar notas con la etiqueta 'hideInExplorer'
  const tags = (node.data as any)?.tags
  if (Array.isArray(tags) && tags.includes('hideInExplorer')) return false

  return true
}
,
})


  ],
  right: [
    Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    removeTags: ["hideInExplorer"],
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    removeTags: ["hideInExplorer"],
  },
}),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
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
