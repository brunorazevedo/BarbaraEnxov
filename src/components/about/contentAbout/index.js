import Image from "next/image";
import { Container } from "../../../styles/global";
import { StyledContentAbout } from "./styles";

import { PageTitle } from "../../PageTitle";

export function ContentAbout({ data }) {
  return (
    <StyledContentAbout>
      <PageTitle title={data.titulo_pagina} description="Pagina Revendedor" />
      <Container>
        <div className="text">
          <h1>{data.data.titulo}</h1>
          <p>{data.data.campo_texto_1}</p>
          <p>{data.data.campo_texto_2}</p>

          <p>{data.data.campo_texto_3}</p>

          <p>{data.data.campo_texto_4}</p>
        </div>

        <div className="image">
          <Image
            src={data.data.imagem_empresa.url}
            alt={data.data.imagem_empresa.alt}
            width={500}
            height={400}
          />
        </div>
      </Container>
    </StyledContentAbout>
  );
}
