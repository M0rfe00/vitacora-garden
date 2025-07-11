import { QuartzFilterPlugin } from "../types"

export const DraftsAndExplorerControl: QuartzFilterPlugin<{}> = () => ({
  name: "DraftsAndExplorerControl",

  // Este controla si la página se publica (generada y accesible por URL)
  shouldPublish(_ctx, [_tree, vfile]) {
    const fm = vfile.data?.frontmatter ?? {}
    const draftFlag = fm.draft === true || fm.draft === "true"
    return !draftFlag
  },

  // Este controla si la página aparece en el explorador lateral
  shouldIncludeInExplorer(_ctx, [_tree, vfile]) {
    const fm = vfile.data?.frontmatter ?? {}
    const draftFlag = fm.draft === true || fm.draft === "true"
    const hideFromExplorer = fm.showInExplorer === false || fm.showInExplorer === "false"

    return !draftFlag && !hideFromExplorer
  },
})