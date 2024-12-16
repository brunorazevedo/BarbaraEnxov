import { Container } from "../../../styles/global";
import { StyledSectionTitleHome } from "./styles";

export function TitleHome({ data }) {
  return (
    <StyledSectionTitleHome>
      <Container>
        <div className="title">
          <h2>{data.titulo_listagem_produtos}</h2>
          <p>{data.subtitulo_listagem_produtos}</p>
        </div>
      </Container>
    </StyledSectionTitleHome>
  );
}
