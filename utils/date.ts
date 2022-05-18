export const yearsSinceDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}