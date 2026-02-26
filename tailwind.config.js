/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B1120", // Deep Charcoal/Midnight (Aurum Style)
                secondary: "#5C2D62", // Deep Royal Purple (Aurum Style)
                accent: "#C5A059", // Metallic Gold (Aurum Style)
            },
            borderRadius: {
                'sm': '5px',
                DEFAULT: '5px',
                'md': '5px',
                'lg': '5px',
                'xl': '5px',
                '2xl': '5px',
                '3xl': '5px',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
