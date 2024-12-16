import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

export const StyledContent = styled("section", {
  [`${Container}`]: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    gap: "3.2rem",
    "@media (max-width: 1214px)": {
      padding: "0 1.6rem",
    },
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
});

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3.2rem",

  "@media (max-width: 1000px)": {
    width: "100%",
  },
});

export const MainImage = styled("img", {
  width: "700px",
  height: "auto",
  marginBottom: "20px",
  "@media (max-width: 1000px)": {
    width: "100%",
  },
});

export const Thumbnails = styled("div", {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  "@media (max-width: 1000px)": {
    width: "100%",
  },

  "@media (max-width: 580px)": {
    width: "100%",
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
  },

  "@media (max-width: 407px)": {
    width: "100%",
    gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
  },
});

export const Thumbnail = styled("img", {
  width: "100px",
  display: "grid",
  cursor: "pointer",
  border: "2px solid transparent",
  overflow: "hidden",
  "&:hover": {
    border: "2px solid blue",
  },
});

export const StyledInfo = styled("div", {
  width: "70%",
  marginTop: "3.2rem",

  "@media (max-width: 1000px)": {
    width: "100%",
  },
});

export const StyledDescription = styled("div", {
  marginBottom: "1.8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "1.6rem",
  p: {
    fontSize: "1.6rem",
    color: "$gray",
    fontWeight: "600",
  },
});
