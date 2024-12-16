import { Header } from "../../components/header";
import { HeaderTitle } from "../../components/headerTitle";
import { SectionSocial } from "../../components/sectionSocial";
import { Footer } from "../../components/footer";
import { getPrismicClient } from "../../service/prismic";
import { SectionHeroReseller } from "../../components/reseller/sectionHeroReseller";
import { ListCardsReseller } from "../../components/reseller/listCardsReseller";
import { WhatsAppButton } from "../../components/whatsappButton";
import Head from "next/head";

export default function Revendedor({
  sectionFooter,
  sectionDoubts,
  pageReseller,
  cardsDiferentialsReseller,
  question,
}) {
  return (
    <>
      <Head>
        {/* Título da página */}
        <title>{pageReseller.data.meta_title || "Página Inicial"}</title>

        {/* Meta descrição para SEO */}
        <meta
          name="description"
          content={
            pageReseller.data.meta_description ||
            "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Palavras-chave (opcional, impacto limitado para SEO moderno) */}
        <meta
          name="keywords"
          content={
            pageReseller.data.meta_keywords || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Tag canonical para evitar conteúdo duplicado */}
        <link rel="canonical" href="https://barbaraenxovais.com.br/" />
        {/* Open Graph para redes sociais */}
        <meta
          property="og:title"
          content={pageReseller.data.meta_title || "Página Inicial"}
        />
        <meta
          property="og:description"
          content={
            pageReseller.data.meta_og_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="og:url"
          content={
            pageReseller.data.meta_og_url || "https://barbaraenxovais.com.br/"
          }
        />
        <meta
          property="og:site_name"
          content={pageReseller.data.meta_og_site_name || "Página Inicial"}
        />
        <meta
          property="og:image"
          content={
            pageReseller.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
        <meta
          property="twitter:image"
          content={
            pageReseller.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={pageReseller.data.meta_title || "Página Inicial"}
        />
        <meta
          property="twitter:description"
          content={
            pageReseller.data.meta_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
      </Head>
      <Header />
      <HeaderTitle title="Seja um Revendedor(a)" />
      <SectionHeroReseller data={pageReseller} question={question} />
      <ListCardsReseller
        data={cardsDiferentialsReseller}
        title={pageReseller.data.titulo_diferenciais}
      />
      <SectionSocial data={sectionDoubts} />
      <Footer data={sectionFooter} />
      <WhatsAppButton />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const sectionDoubts = await prismic.getSingle("secao_contato_duvidas");

  const sectionFooter = await prismic.getSingle("rodape");

  const pageReseller = await prismic.getSingle("revendedor");

  const cardsDiferentialsReseller = await prismic.getAllByType(
    "card_diferenciais_revendedor"
  );

  const question = await prismic.getAllByType("perguntas_frequentes");

  return {
    props: {
      sectionFooter,
      sectionDoubts,
      pageReseller,
      cardsDiferentialsReseller,
      question,
    },
    revalidate: 10,
  };
};
