import { globalCss, styled } from "./index"

export const globalStyles = globalCss({
    "*": {
        padding: '0',
        margin: '0',
        boxSizing: "border-box",
        fontFamily: "Monda, sans-serif"
    },
    html: {
        fontSize: "62.5%",

    },
    body: {
        "-webkit-font-smoothing": "antialisead",
        padding: "0 0px"
    },
    img: {
        maxWidth: "100%",
        display: "block",
    },
    button: {
        cursor: "pointer",
    },
    a: {
        textDecoration: "none",
    },
    ul: {
        listStyle: "none",
    },
})

export const Container = styled("div", {
    width: "100%",
    margin: "0 auto",
    maxWidth: 1216,
})