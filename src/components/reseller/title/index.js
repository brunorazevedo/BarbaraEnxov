import { Container } from "../../../styles/global";
import { StyledTitleReseller } from "./styles";

export function TitleReseller({ title }) {
    return (
        <StyledTitleReseller>
            <Container>
                <h1>{title}</h1>
            </Container>
        </StyledTitleReseller>
    )
}