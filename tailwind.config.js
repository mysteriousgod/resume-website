/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#476b6b',
        'secondary': '#dea08f',
        'accent': '#8c2a1e',
        'background': '#002247',
        'text-light': '#ffffff',
        'card-background': '#143057',
        'border': '#444',
        'placeholder': '#aaa',
        'modal-primary': '#8c2a1e',
        'modal-secondary': '#f5ae3f',
        'card-primary': '#0a406a',
        'dark-card': '#2d2d2d',
        'light-card': '#143057',
        'dark-text': '#ffffff',
        'light-text': '#ffffff',
        'subtext-dark': '#cccccc',
        'subtext-light': '#f5f5f5',
        'input-background': '#143057',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glass-sm': '0 2px 8px 0 rgba(31, 38, 135, 0.1)',
        'glass-md': '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
      }
    },
  },
  plugins: [],
}
