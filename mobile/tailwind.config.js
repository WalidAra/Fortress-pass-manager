/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222.2, 84%, 4.9%)",
        card: "hsl(0, 0%, 100%)",
        cardForeground: "hsl(222.2, 84%, 4.9%)",
        popover: "hsl(0, 0%, 100%)",
        popoverForeground: "hsl(222.2, 84%, 4.9%)",
        primary: "hsl(221.2, 83.2%, 53.3%)",
        primaryForeground: "hsl(210, 40%, 98%)",
        secondary: "hsl(210, 40%, 96.1%)",
        secondaryForeground: "hsl(222.2, 47.4%, 11.2%)",
        muted: "hsl(210, 40%, 96.1%)",
        mutedForeground: "hsl(215.4, 16.3%, 46.9%)",
        accent: "hsl(210, 40%, 96.1%)",
        accentForeground: "hsl(222.2, 47.4%, 11.2%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        destructiveForeground: "hsl(210, 40%, 98%)",
        border: "hsl(214.3, 31.8%, 91.4%)",
        input: "hsl(214.3, 31.8%, 91.4%)",
        ring: "hsl(221.2, 83.2%, 53.3%)",
        radius: "1rem",
        chart1: "hsl(12, 76%, 61%)",
        chart2: "hsl(173, 58%, 39%)",
        chart3: "hsl(197, 37%, 24%)",
        chart4: "hsl(43, 74%, 66%)",
        chart5: "hsl(27, 87%, 67%)",
      },
      borderRadius: {
        custom: "1rem",
      },
    },
  },
  plugins: [],
};
