import { styled } from "../../styles";
import { ContainerButton } from "../button/styles";

export const StyledSectionReseller = styled('section', {
    display: "flex",
    marginTop: "6.4rem",
    '@media (max-width: 1000px)': {
        flexDirection: 'column',
    },
});

export const StyledLeft = styled("div", {
    width: "50%",
    ".imagem-container": {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    ".responsive-image": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    },
    '@media (max-width: 1000px)': {
        width: "100%",
    },
});

export const StyledRight = styled("div", {
    width: "50%",
    display: "grid",
    justifyContent: "center",
    [`${ContainerButton}`]: {
        display: "grid",
        justifyContent: "start",
    },
    backgroundColor: "$stone100",
    '@media (max-width: 1000px)': {
        width: "100%",
    },
});

export const StyledContentRight = styled("div", {
    display: "grid",
    gap: "3.2rem",
    justifyContent: "start",
    padding: "6.4rem",
    ".title": {
        fontSize: "1.8rem",
        color: "$brownDark",
    }

});

export const StyledContentRightInfo = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "1.6rem",
    "p": {
        fontSize: "1.6rem",
        color: "$brownDark",
        fontWeight: 500,
        lineHeight: 1.5,
    }
});
