import { StyledSectionReseller, StyledLeft, StyledRight, StyledContentRight, StyledContentRightInfo } from "./styles";
import bannerRevenda from "../../../public/bannerRevenda.webp";
import { Button } from "../button";
import Link from "next/link";
import Image from "next/image";



export function SectionReseller({ data }) {

    return (
        <StyledSectionReseller>
            <StyledLeft>
                <div className="imagem-container">
                    <img
                        src={bannerRevenda.src}
                        alt="Banner Revenda"
                        className="responsive-image"
                    />
                </div>
            </StyledLeft>
            <StyledRight>
                <StyledContentRight>
                    <div className="title">
                        <h2>SEJA UM REVENDEDOR(A)</h2>
                    </div>
                    {data.map((item, index) => (
                        <StyledContentRightInfo key={index}>
                            <Image
                                src={item.data.icone_cta_revendedor.url}
                                width={32}
                                height={32}
                                alt={item.data.alt}
                            />
                            <p>{item.data.titulo_secao_cta_revendedor}</p>
                        </StyledContentRightInfo>
                    ))}
                    <Link href="/revendedor">
                        <Button title="Preencher formulário" />
                    </Link>
                </StyledContentRight>
            </StyledRight>
        </StyledSectionReseller>
    );
}
