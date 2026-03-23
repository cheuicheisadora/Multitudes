export type DesignTokens = {
  colors: {
    background: string
    surface: string
    surfaceRaised: string
    border: string
    primary: string
    primaryMuted: string
    foreground: string
    muted: string
    accent: string
    destructive: string
    destructiveForeground: string
    input: string
    ring: string
  }
  sidebar: {
    background: string
    foreground: string
    primary: string
    primaryForeground: string
    accent: string
    accentForeground: string
    border: string
    ring: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  typography: {
    fontSans: string
    fontMono: string
    fontSerif: string
  }
}

export const tokens: DesignTokens = {
  colors: {
    background: '#0d0f14',
    surface: '#141720',
    surfaceRaised: '#1c2130',
    border: '#252d3d',
    primary: '#c9a84c',
    primaryMuted: 'rgba(201,168,76,0.133)',
    foreground: '#e8e6e1',
    muted: '#7a8499',
    accent: '#2a5caa',
    destructive: '#e53e3e',
    destructiveForeground: '#ffffff',
    input: '#1c2130',
    ring: '#c9a84c',
  },
  sidebar: {
    background: '#141720',
    foreground: '#e8e6e1',
    primary: '#c9a84c',
    primaryForeground: '#0d0f14',
    accent: '#1c2130',
    accentForeground: '#e8e6e1',
    border: '#252d3d',
    ring: '#c9a84c',
  },
  radius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '5rem',
  },
  typography: {
    fontSans: '"DM Sans", system-ui, -apple-system, sans-serif',
    fontMono: '"DM Mono", "Fira Code", monospace',
    fontSerif: '"Fraunces", Georgia, serif',
  },
}

export default tokens
