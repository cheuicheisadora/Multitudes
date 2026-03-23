export type DesignTokens = {
  colors: {
    primary: string
    background: string
    accent: string
    foreground: string
    muted: string
    mutedForeground: string
    border: string
    card: string
    cardForeground: string
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
    primary: '#1a2332',
    background: '#f8f7f4',
    accent: '#c9a84c',
    foreground: '#2d3748',
    muted: '#e8e6e1',
    mutedForeground: '#718096',
    border: '#d1cec9',
    card: '#ffffff',
    cardForeground: '#2d3748',
    destructive: '#e53e3e',
    destructiveForeground: '#ffffff',
    input: '#e2e0db',
    ring: '#c9a84c',
  },
  sidebar: {
    background: '#1a2332',
    foreground: '#f8f7f4',
    primary: '#c9a84c',
    primaryForeground: '#1a2332',
    accent: '#243047',
    accentForeground: '#f8f7f4',
    border: '#243047',
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
    fontSans: '"Inter", system-ui, -apple-system, sans-serif',
    fontMono: '"JetBrains Mono", "Fira Code", monospace',
    fontSerif: '"Merriweather", Georgia, serif',
  },
}

export default tokens
