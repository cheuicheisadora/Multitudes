/**
 * Converts a camelCase key to a CSS custom property name.
 * e.g. "mutedForeground" -> "--muted-foreground"
 */
export function tokenKeyToCssVar(key: string): string {
  const kebab = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
  return `--${kebab}`
}

/**
 * Converts a camelCase sidebar key to a CSS custom property name.
 * e.g. "primaryForeground" -> "--sidebar-primary-foreground"
 */
export function sidebarKeyToCssVar(key: string): string {
  const kebab = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
  return `--sidebar-${kebab}`
}
