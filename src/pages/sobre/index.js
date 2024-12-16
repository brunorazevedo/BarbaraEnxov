import Head from "next/head";
import { ContentAbout } from "../../components/about/contentAbout";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { HeaderTitle } from "../../components/headerTitle";
import { WhatsAppButton } from "../../components/whatsappButton";
import { getPrismicClient } from "../../service/prismic";
import { Container } from "../../styles/global";

export default function Sobre({ sectionFooter, pageAbout }) {
  return (
    <>
      <Head>
        {/* Título da página */}
        <title>{pageAbout.data.meta_title || "Página Inicial"}</title>

        {/* Meta descrição para SEO */}
        <meta
          name="description"
          content={
            pageAbout.data.meta_description || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Palavras-chave (opcional, impacto limitado para SEO moderno) */}
        <meta
          name="keywords"
          content={
            pageAbout.data.meta_keywords || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Tag canonical para evitar conteúdo duplicado */}
        <link rel="canonical" href="https://barbaraenxovais.com.br/" />

        {/* Open Graph para redes sociais */}
        <meta
          property="og:title"
          content={pageAbout.data.meta_title || "Página Inicial"}
        />
        <meta
          property="og:description"
          content={
            pageAbout.data.meta_og_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="og:url"
          content={
            pageAbout.data.meta_og_url || "https://barbaraenxovais.com.br/"
          }
        />
        <meta
          property="og:site_name"
          content={pageAbout.data.meta_og_site_name || "Página Inicial"}
        />
        <meta
          property="og:image"
          content={
            pageAbout.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
        <meta
          property="twitter:image"
          content={
            pageAbout.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={pageAbout.data.meta_title || "Página Inicial"}
        />
        <meta
          property="twitter:description"
          content={
            pageAbout.data.meta_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
      </Head>
      <Header />
      <HeaderTitle title="SOBRE NÓS" />
      <Container>
        <ContentAbout data={pageAbout} />
        <Footer data={sectionFooter} />
        <WhatsAppButton />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const sectionFooter = await prismic.getSingle("rodape");

  const pageAbout = await prismic.getSingle("sobre");
  return {
    props: {
      sectionFooter,
      pageAbout,
    },
    revalidate: 10,
  };
};
