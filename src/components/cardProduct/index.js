import Link from "next/link";
import { useState } from "react";
import { StyleCard } from "./styles";

export function CardProduct({ image, name, slug }) {
    const [hovered, setHovered] = useState(false);

    return (
        <StyleCard
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link href={`/produto/${slug}`} passHref>
                <div className="image" data-name={name}>
                    <img src={image} alt={name} />
                    <div className={`overlay ${hovered ? 'active' : ''}`}>
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
