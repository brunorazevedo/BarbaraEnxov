import { useState } from "react";
import { Container } from "../../styles/global";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  HeaderStyle,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuLinks,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

const linksMenu = [
  { name: "Inicio", url: "#" },
  { name: "Sobre nós", url: "/sobre" },
  { name: "Produtos", url: "/produtos" },
  { name: "Revendedor", url: "/revendedor" },
  { name: "Contato", url: "/contato" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo do Site" width={60} height={60} />
          </Link>
        </div>
        <MobileMenuIcon onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
        <div className="links-menu">
          <ul>
            {linksMenu.map(({ name, url }) => {
              return (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <MobileMenu className={isMobileMenuOpen ? "is-open" : ""}>
          <MobileMenuLinks>
            {linksMenu.map(({ name, url }) => {
              return (
                <li key={name}>
                  <a href={url} onClick={handleMobileMenuToggle}>
                    {name}
                  </a>
                </li>
              );
            })}
          </MobileMenuLinks>
        </MobileMenu>
      </Container>
    </HeaderStyle>
  );
}
