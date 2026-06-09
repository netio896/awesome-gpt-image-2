/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#151515',
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'accent-primary': '#6366f1',
      },
    },
  },
  plugins: [],
}