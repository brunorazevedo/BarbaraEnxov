import Link from "next/link";
import { useState } from "react";
import { StyleCard } from "./styles";
import Image from "next/image";

export function CardProduct({ image, name, slug }) {
  const [hovered, setHovered] = useState(false);

  return (
    <StyleCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/produto/${slug}`} passHref>
        <div className="image" data-name={name}>
          <Image
            src={image}
            alt={name}
            width={500} // Defina a largura desejada
            height={300} // Defina a altura desejada
          />

          <div className={`overlay ${hovered ? "active" : ""}`}>
            <span>{name}</span>
          </div>
        </div>
      </Link>
      {!hovered && ( // Exibe o nome apenas se não estiver hover
        <div className="info">
          <Link href={`/produto/${slug}`} passHref>
            <div>
              <h3>{name}</h3>
            </div>
          </Link>
        </div>
      )}
    </StyleCard>
  );
}
