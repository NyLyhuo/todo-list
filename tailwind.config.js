/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text': '#eae0f9',
        'background': '#0e051b',
        'primary': '#ac83e6',
        'secondary': '#911d7c',
        'accent': '#da46a1',
        'highlight': '#911D7B4C',
       },
    },
  },
  plugins: [],
};
