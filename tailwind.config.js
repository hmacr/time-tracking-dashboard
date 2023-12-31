import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
  theme: {
    colors: {
      blue: 'hsl(246, 80%, 60%)',
      'light-red-1': 'hsl(15, 100%, 70%)',
      'light-red-2': 'hsl(348, 100%, 68%)',
      'soft-blue': 'hsl(195, 74%, 62%)',
      'lime-green': 'hsl(145, 58%, 55%)',
      violet: 'hsl(264, 64%, 52%)',
      'soft-orange': 'hsl(43, 84%, 65%)',
      'very-dark-blue': 'hsl(226, 43%, 10%)',
      'dark-blue': 'hsl(235, 46%, 20%)',
      'desaturated-blue': 'hsl(235, 45%, 61%)',
      'pale-blue': 'hsl(236, 100%, 87%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
  },
};
