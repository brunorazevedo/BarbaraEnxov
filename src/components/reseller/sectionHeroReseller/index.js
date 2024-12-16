import { Container } from "../../../styles/global";
import { TitleReseller } from "../title";
import { StyledSectionHeroReseller, AlignTitle } from "./styles";

import { FormContact } from "../form";
import { Accordion } from "../accordion";

export function SectionHeroReseller({ data, question }) {
  return (
    <>
      <StyledSectionHeroReseller>
        <Container>
          <AlignTitle>
            <TitleReseller title={data.data.titulo_formulario} />
          </AlignTitle>
          <FormContact data={data} />
          <AlignTitle>
            <TitleReseller title={data.data.titulo_faq_perguntas} />
          </AlignTitle>
          <Accordion data={question} />
        </Container>
      </StyledSectionHeroReseller>
    </>
  );
}
