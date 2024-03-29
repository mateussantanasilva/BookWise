import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-nunito)',
    },

    extend: {
      lineHeight: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },

      colors: {
        overlay: 'rgba(0, 0, 0, 0.60)',
        'link-white': 'rgba(230, 232, 242, 0.04)',
        'link-purple': 'rgba(131, 129, 217, 0.06)',

        white: '#FFFFFF',
        black: '#000000',

        red: {
          500: '#F75A68',
        },

        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },

        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },

        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },

      maxWidth: {
        login: '50vw',
      },

      gridTemplateColumns: {
        login: 'min-content, 1fr',
        aside: '17rem, 1fr',
        panel: '1fr, 26.25rem',
        profile: '1fr, 25.25rem',
      },

      backgroundImage: {
        aside: 'url("/images/bg-aside.png")',
        'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
      },

      height: {
        aside: 'calc(100vh - 2rem)',
      },

      width: {
        sidebar: 'min(14.5rem, 80vw)',
        'book-dialog': 'min(41.25rem, 90vw)',
        'login-dialog': 'min(32.25rem, 92vw)',
        'buttons-dialog': 'min(23.25rem, 100%)',
      },
    },
  },
  plugins: [],
}
export default config
