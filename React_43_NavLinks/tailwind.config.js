/** @type {import('tailwindcss').Config} */
export default {
  // yha pe hum bta rhe hai  ki tailwind ki jo classes hai kis kis
  // file ke andr rhegi..
  // basically hum bta rhe hai ki tailwind ki classes kha kha search krni hai 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

