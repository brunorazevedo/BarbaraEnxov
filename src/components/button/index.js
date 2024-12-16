import Link from "next/link"
import { StyleButton, ContainerButton } from "./styles"


export function Button({ title,icon, href }) {
    return (
        <ContainerButton>
                <StyleButton href={href}>
                    {icon}
                    {title}
                </StyleButton>
        </ContainerButton>

    )
}