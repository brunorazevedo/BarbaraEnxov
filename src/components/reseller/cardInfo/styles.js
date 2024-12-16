import {styled} from "../../../styles"

export const StyledCardInfo = styled("div",{
    width: "100%",
    maxWidth: "38rem",
    boxShadow:"0px 3px 26px 4px rgba(214,214,214,1)",
    transition: "transform 0.5s ease, background-color 0.3s ease",
    borderRadius:".8rem",
    '@media (max-width: 626px)': {
        maxWidth:"100%",
    },
    '&:hover': {
    backgroundColor: '$brownLight',
  },



})

export const StyledInfo = styled("div", {
    display:"grid",
    gap:"1.2rem",
    padding:"1.6rem",
    
    "h4":{
        fontSize:"1.8rem",
        color:"$brownDark900",
        fontWeight: 600,
    },

    "p":{
        fontSize:"1.4rem",
        color:"$gray",
    },
})