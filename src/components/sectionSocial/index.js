import { StyledContentSocial } from "./styles"
import { Button } from "../../components/button"
import { WhatsappLogo  } from '@phosphor-icons/react'
import { Container } from "../../styles/global.js"
import Link from "next/link.js"



export function SectionSocial({data}) {
    
    return (
        <StyledContentSocial>
            <Container>
                <h2>{data.data.titulo_da_secao}</h2>
                <p>{data.data.subtitulo_da_secao}</p>
                <div>
                    <Link href={data.data.link_contato} target="_blank">
                        <Button title="Enviar Mensagem" icon={<WhatsappLogo size={24}  />} />
                    </Link>
                </div>

            </Container>
        </StyledContentSocial>
    )
}