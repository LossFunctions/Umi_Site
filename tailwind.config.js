/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light mode
        'bg-light': '#FAF9F8',
        'text-primary': '#0F0E0E',
        'text-muted': '#6B7280',
        'accent-blue': '#1010F8',
        // Dark mode
        'bg-dark': '#060E15',
        'text-light': '#F8F9F9',
        'text-muted-dark': '#9CA3AF',
        'accent-cyan': '#38B8F8',
        // Status colors
        'status-green': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'pill': '999px',
      },
      maxWidth: {
        'container': '1200px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cyan-glow': '0 0 20px rgba(56, 184, 248, 0.3), 0 0 40px rgba(56, 184, 248, 0.1)',
        'cyan-glow-strong': '0 0 30px rgba(56, 184, 248, 0.5), 0 0 60px rgba(56, 184, 248, 0.2)',
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.4s ease-out forwards',
        'fade-slide-out': 'fadeSlideOut 0.4s ease-out forwards',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSlideOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
