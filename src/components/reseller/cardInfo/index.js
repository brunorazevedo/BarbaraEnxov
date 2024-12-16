import Image from "next/image";
import { StyledCardInfo, StyledInfo } from "./styles";

import Link from "next/link";

export function CardInfo({ icon, titleCard, description, href }) {
  return (
    <>
      <StyledCardInfo>
        <StyledInfo>
          <Image src={icon} width={32} height={32} alt="icone" />

          <h4>{titleCard}</h4>
          <p>{description}</p>
        </StyledInfo>
      </StyledCardInfo>
    </>
  );
}
