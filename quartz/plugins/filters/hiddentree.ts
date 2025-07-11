import type { Filter } from "@quartz/plugins";

export function HideFromExplorer(): Filter {
  return {
    name: "HideFromExplorer",
    filterContentPage(page) {
      // Si el frontmatter tiene showInExplorer: false, excluimos la página del índice/explorador
      if (page.frontmatter.showInExplorer === false) {
        return false; // false = no incluir en índice/explorador
      }
      return true;
    },
  };
}