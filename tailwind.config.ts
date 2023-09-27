import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        pj: 'minmax(20%, 60%) 1fr',
        label: "minmax(5rem, 10rem) minmax(20rem, 40rem)"
      },
      colors: {
        red: {
          10: ' #f50400ff',
          50: '#b80c09ff'
        },
        gray: {
          10: '#e6efeaff',
          50: '#b5bab5ff',
          100: '#202021'
        },
        bg: {
          100: '#39393aff',
          500: '#2e2c2c'
        }
      }
    },
  },
  plugins: [],
}
export default config
