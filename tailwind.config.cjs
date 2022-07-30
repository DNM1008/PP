/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./src/**/*.{svelte,js,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('flowbite/plugin')],
}
