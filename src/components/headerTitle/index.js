import { Container } from "../../styles/global";
import { StyleHeaderTitle } from "./styles";

export function HeaderTitle({title}) {
    return(
      <StyleHeaderTitle>
        <Container>
            <h2>{title}</h2>
        </Container>
      </StyleHeaderTitle>
    )
}