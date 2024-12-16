
import { styled } from "../../../styles";

export const StyledSectionHeroReseller = styled("section",{
    '@media (max-width: 1000px)': {
        padding:"0 1.6rem",
    },
    
})

export const StyledListCard = styled("div",{
    display: "grid",
    gridTemplateColumns:"repeat(3, 1fr)",
    gap:"3.2rem",
    marginTop:"4.8rem",
    marginBottom:"8rem",
    '@media (max-width: 840px)': {
        gridTemplateColumns:"repeat(2, 1fr)",
        
    },

    '@media (max-width: 626px)': {
        gridTemplateColumns:"repeat(1, 1fr)",
    },
})