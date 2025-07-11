export function getDate(dateString?: string): string {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
