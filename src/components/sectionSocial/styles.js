import { styled } from "../../styles"

import { Container } from "../../styles/global"


export const StyledContentSocial = styled("section", {
    backgroundColor: " $brownLight",
    height: "30rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    [`${Container}`]: {
        maxWidth: "50rem",
    },

    "h2": {
        fontSize: "2.4rem",
        color: "$brownDark",
        marginBottom: "1.6rem",
        '@media (max-width: 600px)': {
            fontSize: "1.8rem",
            padding:"1.6rem",
        },
    },

    "p": {
        fontSize: "1.6rem",
        fontWeight: 500,
        color: "$gray",
        marginBottom:"1.6rem",
        '@media (max-width: 600px)': {
            fontSize: "1.4rem",
            padding:"0 1.6rem",
        },
    }
})