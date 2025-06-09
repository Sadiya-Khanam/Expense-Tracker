/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        expense: 'var(--color-expense)',
        'expense-light': 'var(--color-expense-light)',
        'expense-dark': 'var(--color-expense-dark)',
      },
    },
  },
  plugins: [],
};
