/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {//tainwindcss 定制颜色 https://www.tailwindcss.cn/docs/adding-custom-styles
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                // 'blue': 'rgb(79 70 229)',
                // 'pink': '#ff49db',
                // 'orange': '#ff7849',
                // 'green': '#13ce66',
                // 'gray-dark': '#273444',
                // 'gray': '#8492a6',
                // 'gray-light': '#d3dce6',
            },
        }
    },
    darkMode: 'class',
    // prefix: 'tw-',
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    primary: 'rgb(79 70 229)'
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    primary: 'rgb(79 70 229)'
                }
            },
        ],
    }
    //     themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    //     darkTheme: "dark", //
    //     base: true, // applies background color and foreground color for root element by default
    //     styled: true, // include daisyUI colors and design decisions for all components
    //     utils: true, // adds responsive and modifier utility classes
    //     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //     themeRoot: ":root",
    // },
}

