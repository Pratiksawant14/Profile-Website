export const DESIGN_TOKENS = {
  colors: {
    accent: {
      primary: '#2563eb',
      hover: '#1d4ed8',
      dark: '#3b82f6',
    },
    neutral: {
      lightBg: '#ffffff',
      lightSurface: '#f9fafb',
      darkBg: '#0a0d14',
      darkSurface: '#131926',
    },
  },
  typography: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },
  layout: {
    containerWidth: '1216px',
    navbarHeight: '64px',
  },
  animation: {
    springPrecision: [0.16, 1, 0.3, 1] as const,
    durationFast: 0.15,
    durationNormal: 0.25,
    durationSlow: 0.35,
  },
} as const;
