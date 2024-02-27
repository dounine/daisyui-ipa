/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            // backgroundColor: {
            //     'slate': '#131313',
            // },
            colors: {},
        }
    },
    darkMode: 'class',
    // prefix: 'tw-',
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
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

