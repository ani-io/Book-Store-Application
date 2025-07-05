/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                softBlue: '#e0f2fe',
                softPink: '#fce7f3',
                softPurple: '#ede9fe',
                softGreen: '#dcfce7',
                softYellow: '#fef9c3',
                softGray: '#f3f4f6',
                accent: '#a5b4fc',
                primary: '#6366f1',
                secondary: '#f472b6',
            },
            borderRadius: {
                'soft': '1.5rem',
                'xl': '2rem',
                'full': '9999px',
            },
            boxShadow: {
                'soft': '0 4px 32px 0 rgba(100, 116, 139, 0.10)',
                'soft-lg': '0 8px 40px 0 rgba(100, 116, 139, 0.12)',
            },
            transitionProperty: {
                'soft': 'background, color, box-shadow, border-color',
            },
        },
    },
    plugins: [require("daisyui")],
};