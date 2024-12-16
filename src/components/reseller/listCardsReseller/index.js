
import { Container } from "../../../styles/global";
import { CardInfo } from "../cardInfo";
import { AlignTitle } from "../sectionHeroReseller/styles";
import { TitleReseller } from "../title";
import { StyledListCard, StyledSectionHeroReseller } from "./styles";


export function ListCardsReseller({ data, title }) {

    const sortedData = data.sort((a, b) => a.uid - b.uid);

    return (
        <>
            <StyledSectionHeroReseller>
                <Container>
                    <AlignTitle>
                        <TitleReseller title={title} />
                    </AlignTitle>


                    <StyledListCard >
                        {
                            sortedData.map(card => {
                                return (
                                    <CardInfo
                                        key={card.id}
                                        icon={card.data.icone_imagem.url}
                                        titleCard={card.data.titulo_card_diferenciais}
                                        description={card.data.subtitulo_card_diferenciais}
                                    />
                                )
                            })
                        }

                    </StyledListCard>

                </Container>

            </StyledSectionHeroReseller>
        </>
    )
}