import Link from "next/link";
import { Container } from "../../../styles/global";
import { CardInfo } from "../../reseller/cardInfo";
import { StyledListCard, StyledSectionHeroReseller } from "./styles";

export function ListCardsContact({ data }) {
  // Função para ordenar os dados pelo uid
  const sortedData = data.sort((a, b) => a.uid - b.uid);

  console.log(data.url_card);

  return (
    <>
      <StyledSectionHeroReseller>
        <Container>
          <StyledListCard>
            {sortedData.map((card) => {
              return (
                <Link href={card.data.url_card} target="_blank" key={card.uid}>
                  <CardInfo
                    key={card.uid}
                    icon={card.data.icone_card.url}
                    titleCard={card.data.titulo_card}
                    description={card.data.subtitulo_card}
                  />
                </Link>
              );
            })}
          </StyledListCard>
        </Container>
      </StyledSectionHeroReseller>
    </>
  );
}
