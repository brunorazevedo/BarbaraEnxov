import { Header } from "../../components/header";
import { HeaderTitle } from "../../components/headerTitle";
import { Footer } from "../../components/footer";
import { getPrismicClient } from "../../service/prismic";
import { WhatsAppButton } from "../../components/whatsappButton";
import { ListCardsContact } from "../../components/contact/listCardContact";
import { SectionReseller } from "../../components/sectionReseller";
import Head from "next/head";

export default function Contato({
  pageContact, // Desestruturando para obter pageContact diretamente das props
  sectionReseller,
  sectionFooter,
  cardsContact,
}) {
  return (
    <>
      <Head>
        {/* Título da página */}
        <title>{pageContact.meta_title || "Página Inicial"}</title>

        {/* Meta descrição para SEO */}
        <meta
          name="description"
          content={
            pageContact.data.meta_description || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Palavras-chave (opcional, impacto limitado para SEO moderno) */}
        <meta
          name="keywords"
          content={
            pageContact.data.meta_keywords || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Tag canonical para evitar conteúdo duplicado */}
        <link rel="canonical" href="https://barbaraenxovais.com.br/" />

        {/* Open Graph para redes sociais */}
        <meta
          property="og:title"
          content={pageContact.data.meta_title || "Página Inicial"}
        />
        <meta
          property="og:description"
          content={
            pageContact.data.meta_og_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="og:url"
          content={
            pageContact.data.meta_og_url || "https://barbaraenxovais.com.br/"
          }
        />
        <meta
          property="og:site_name"
          content={pageContact.data.meta_og_site_name || "Página Inicial"}
        />
        <meta
          property="og:image"
          content={
            pageContact.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
        <meta
          property="twitter:image"
          content={
            pageContact.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={pageContact.data.meta_title || "Página Inicial"}
        />
        <meta
          property="twitter:description"
          content={
            pageContact.data.meta_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
      </Head>
      <Header />
      <HeaderTitle title="Entre em contato conosco" />
      <ListCardsContact data={cardsContact} />
      <SectionReseller data={sectionReseller} />
      <Footer data={sectionFooter} />
      <WhatsAppButton />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const sectionDoubts = await prismic.getSingle("secao_contato_duvidas");

  const sectionFooter = await prismic.getSingle("rodape");

  const cardsContact = await prismic.getAllByType("card_contato");

  const sectionReseller = await prismic.getAllByType("secao_cta_revendedor");

  const titlePageContact = await prismic.getSingle("titulo_pagina_contato");

  const pageContact = await prismic.getSingle("contato");

  return {
    props: {
      pageContact,
      sectionFooter,
      sectionReseller,
      sectionDoubts,
      cardsContact,
      titlePageContact,
    },
    revalidate: 10,
  };
};
