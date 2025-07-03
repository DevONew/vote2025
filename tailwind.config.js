/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}',
            './src/pages/**/*.{js,ts,jsx,tsx}',
          ],
  theme: {
    extend: {
      backgroundImage: {
        'glow-center': 'radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 60%)',
      },
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
    }
  },
  plugins: [],
}

