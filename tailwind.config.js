import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", "sans-serif"],
                lexend: ["Lexend", "sans-serif"],
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },

            colors: {
                "custom-dark": "#173976",
                "custom-start": "#7D2AE7",
                "custom-end": "#1C8CDB",
                "grad-1": "#173976",
                "product_color": "#A1C0E5",
                "langganan": "#18182C",
            },

            backgroundImg: {
                cloud: "url('images/Awan_section.svg')",
            },

            boxShadow: {
                "white-cloud": "0 20px 30px rgba(255, 255, 255, 0.5)",
            },

            animation: {
                'fade-in-left': 'fadeInLeft 1s ease-out',
                'fade-in-right': 'fadeInRight 1s ease-out',
                'cloud-move': 'cloudMove 10s linear infinite',
            },
            keyframes: {
                fadeInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                cloudMove: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100px)' },
                },
        },
    },

    plugins: [forms],
},
};
