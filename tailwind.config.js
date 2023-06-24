/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                blob: "blob 7s infinite",
                blobtest: "blob 2s ",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(10px, -10px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-5px, 5px) scale(0.9)",
                    },
                    "100%": {
                        transform: "tranlate(0px, 0px) scale(1)",
                    },
                },
            },
            colors: {
                test: "bg-gradient-to-t from-[#070b1d] to-[#0c0d21]",
                agblack: "#27272A",
                agshadowblack: "#323232",
                agshadowgrey: "#505051",
                agwhite: "#FFFFFF",
                aggray: "#D9D9D9",
                agblue: "#363BB1",
                fuchsia: {
                    900: "#a855f7",
                },
                indigo: {
                    900: "#4f46e5",
                    400: "#7c3aed",
                },
                gray: {
                    500: "#a0aec0",
                },
                pink: {
                    300: "#f687b3",
                },
                purple: {
                    300: "#d53f8c",
                },
                indigo: {
                    400: "#7c3aed",
                },
                darkblue1: "#03081C",
                darkblue2: "#070B1D",
            },
            backgroundImage: (theme) => ({
                "dark-gradient": `conic-gradient(at top right, ${theme(
                    "colors.fuchsia.900"
                )}, ${theme("colors.indigo.900")}, ${theme(
                    "colors.gray.500"
                )})`,
                "light-gradient": `linear-gradient(to right, ${theme(
                    "colors.pink.300"
                )}, ${theme("colors.purple.300")}, ${theme(
                    "colors.indigo.400"
                )})`,
                "light-gradient-silver": `linear-gradient(to right, ${theme(
                    "colors.silver1"
                )}, ${theme("colors.silver2")})`,
                "dark-gradient-blue": `linear-gradient(to right, ${theme(
                    "colors.darkblue1"
                )}, ${theme("colors.darkblue2")})`,
            }),
        },
    },
};
