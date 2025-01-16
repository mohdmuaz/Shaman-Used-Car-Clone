/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        boxShadow: {
          'inner-left': 'inset -4px 0 6px rgba(0, 0, 0, 0.3)', // Customize as needed
        },
      },
    },
  },
  plugins: [],
}

