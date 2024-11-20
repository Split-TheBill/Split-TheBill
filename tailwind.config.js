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
            },

            backgroundImg: {
                cloud: "url('images/Awan_section.svg')",
            },

            boxShadow:{
                'white-cloud': '0 20px 30px rgba(255, 255, 255, 0.5)',
            },
        },
    },

    plugins: [forms],
};
