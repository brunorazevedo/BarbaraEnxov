import { Container } from "../../styles/global";
import {
  StyledFooter,
  StyledContentFooter,
  StyledBorderFooter,
  StyledFooterContentCopy,
} from "./styles";

import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Footer({ data }) {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual
  return (
    <StyledFooter>
      <Container>
        <StyledContentFooter>
          <div className="left">
            <a>
              <Image src={Logo} alt="Logo Site" width={120} height={120} />
            </a>

            <p>{data.data.descricao}</p>
          </div>

          <div className="center">
            <div className="title">
              <h3>FÁBRICA</h3>
            </div>

            <div className="info">
              <p>{data.data.rua}</p>
              <p>CEP:{data.data.cep}​</p>
              <p>{data.data.cidade}</p>
              <Link href="#" style={{ fontWeight: "bold", color: "#685A4F" }}>
                Clique para ver no mapa
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="title">
              <h3>ATENDIMENTO</h3>
            </div>
            <div className="info">
              <p>{data.data.horario_seg_quinta}</p>
              <p>{data.data.horario_sextafeira}​​​​​​​​​​​​​​​</p>
              <p>{data.data.email}​</p>
              <Link
                href={data.data.link_tel_whats}
                style={{ fontWeight: "bold", color: "#685A4F" }}
                target="_blank"
              >
                {data.data.contato_telefonico}
              </Link>
            </div>
          </div>
        </StyledContentFooter>
      </Container>
      <StyledBorderFooter></StyledBorderFooter>

      <StyledFooterContentCopy>
        <div>
          <p>
            &copy; {currentYear} | Todos os direitos reservados - Bárbara
            Enxovais
          </p>
        </div>
        <div>
          desenvolvido por{" "}
          <a href="https://www.linkedin.com/in/bruno-ribeiro-860056187/">
            Bruno Ribeiro
          </a>
        </div>
      </StyledFooterContentCopy>
    </StyledFooter>
  );
}
