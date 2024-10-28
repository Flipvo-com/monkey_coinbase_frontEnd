/** @type {import('tailwindcss').Config} */
export default {
  prefix: '_',
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
      safelist: [
        {
          pattern: /_text-(blue|red|green|yellow|purple|pink|indigo)-(50|100|200|300|400|500|600|700|800|900|950)/,
        },
      ],
}

