import React, { useState, useEffect } from "react";

import { Container } from "../../../styles/global.js";

import {
  StyledInfo,
  StyledContent,
  Wrapper,
  MainImage,
  Thumbnails,
  Thumbnail,
  StyledDescription,
} from "./styles";
import { HeaderTitle } from "../../headerTitle/index.js";
import { TitleDetails } from "../titleDetails/index.js";
import { AccordionDetails } from "../accordionDetails/index.js";
import { ListInstructionOfUse } from "../listInstructionOfUse/index.js";
import { AccordionSizeBed } from "../accordionSizeBed/index.js";
import { Button } from "../../button/index.js";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";

export function SectionHeroProduct({ data }) {
  const [mainImage, setMainImage] = useState("");
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    if (data) {
      const images = [];
      for (let i = 1; data[`imagem_galeria_${i}`]; i++) {
        images.push(data[`imagem_galeria_${i}`].url); // Supondo que `data[`imagem_galeria_${i}`]` tenha a estrutura `{ url: 'https://caminho/para/imagem.jpg' }`
      }
      setImagesArray(images);
      if (images.length > 0) {
        setMainImage(images[0]); // Define a primeira imagem como imagem principal inicial
      }
    }
  }, [data]);

  return (
    <>
      <StyledContent>
        <HeaderTitle title={data.nome_do_produto} />
        <Container>
          <Wrapper>
            {mainImage && (
              <MainImage src={mainImage} alt={data.imagem_galeria_1.alt} />
            )}
            <Thumbnails>
              {imagesArray.map((img, index) => (
                <Thumbnail
                  key={index}
                  src={img}
                  alt={data[`imagem_galeria_${index + 1}`].alt}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </Thumbnails>
          </Wrapper>

          <StyledInfo>
            <StyledDescription>
              <p>{data.descricao_do_produto[0].text}</p>
              <div>
                <Link href={data.link_contato} target="_blank">
                  <Button
                    title="Falar com atendente"
                    icon={<WhatsappLogo size={24} />}
                    classname="button-cotar"
                  />
                </Link>
              </div>
            </StyledDescription>
            <TitleDetails title="Especificações" />
            <AccordionDetails data={data} />
            <TitleDetails title="Instruções de Uso" />
            <ListInstructionOfUse />
            <AccordionSizeBed data={data} />
          </StyledInfo>
        </Container>
        <Link href="/produtos">
          <Button title="Ver todos os produtos" />
        </Link>
      </StyledContent>
    </>
  );
}
