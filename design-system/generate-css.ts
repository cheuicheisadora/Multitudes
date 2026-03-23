import * as fs from 'fs'
import * as path from 'path'
import { tokens } from './tokens'
import { tokenKeyToCssVar, sidebarKeyToCssVar } from './utils'

const MARKER_START = '/* design-system:start */'
const MARKER_END = '/* design-system:end */'

function generateCssBlock(): string {
  const lines: string[] = [':root {']

  // Colors
  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`)
  }

  // Sidebar
  for (const [key, value] of Object.entries(tokens.sidebar)) {
    lines.push(`  ${sidebarKeyToCssVar(key)}: ${value};`)
  }

  // Radius
  for (const [key, value] of Object.entries(tokens.radius)) {
    lines.push(`  --radius-${key}: ${value};`)
  }

  // Typography
  for (const [key, value] of Object.entries(tokens.typography)) {
    const cssKey = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
    lines.push(`  --${cssKey}: ${value};`)
  }

  lines.push('}')
  return lines.join('\n')
}

const cssBlock = generateCssBlock()
const globalsPath = path.resolve(__dirname, '../app/globals.css')
const current = fs.readFileSync(globalsPath, 'utf-8')

const isCheck = process.argv.includes('--check')

const marker = `${MARKER_START}\n${cssBlock}\n${MARKER_END}`

if (current.includes(MARKER_START)) {
  const updated = current.replace(
    new RegExp(`${MARKER_START}[\\s\\S]*?${MARKER_END}`),
    marker
  )

  if (isCheck) {
    if (current === updated) {
      console.log('✅ CSS tokens are up to date.')
      process.exit(0)
    } else {
      console.error('❌ CSS tokens are out of sync. Run: npm run tokens')
      process.exit(1)
    }
  }

  fs.writeFileSync(globalsPath, updated)
  console.log('✅ CSS tokens updated in globals.css')
} else {
  const updated = current + '\n' + marker + '\n'

  if (isCheck) {
    console.error('❌ CSS tokens block not found. Run: npm run tokens')
    process.exit(1)
  }

  fs.writeFileSync(globalsPath, updated)
  console.log('✅ CSS tokens appended to globals.css')
}
