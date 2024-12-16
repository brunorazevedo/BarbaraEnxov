import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { HeaderTitle } from "../../components/headerTitle";
import { ListProducts } from "../../components/home/listProducts";
import { SectionReseller } from "../../components/sectionReseller";
import { SectionSocial } from "../../components/sectionSocial";
import { WhatsAppButton } from "../../components/whatsappButton";
import { getPrismicClient } from "../../service/prismic";

export default function Produtos({
  pageProducts,
  sectionFooter,
  sectionReseller,
  sectionDoubts,
  products,
}) {
  return (
    <>
      <Head>
        {/* Título da página */}
        <title>{pageProducts.data.meta_title || "Página Inicial"}</title>

        {/* Meta descrição para SEO */}
        <meta
          name="description"
          content={
            pageProducts.data.meta_description ||
            "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Palavras-chave (opcional, impacto limitado para SEO moderno) */}
        <meta
          name="keywords"
          content={
            pageProducts.data.meta_keywords || "Lençol, Edredom, Jogo de Cama"
          }
        />
        {/* Tag canonical para evitar conteúdo duplicado */}
        <link rel="canonical" href="https://barbaraenxovais.com.br/" />
        {/* Open Graph para redes sociais */}
        <meta
          property="og:title"
          content={pageProducts.data.meta_title || "Página Inicial"}
        />
        <meta
          property="og:description"
          content={
            pageProducts.data.meta_og_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="og:url"
          content={
            pageProducts.data.meta_og_url || "https://barbaraenxovais.com.br/"
          }
        />
        <meta
          property="og:site_name"
          content={pageProducts.data.meta_og_site_name || "Página Inicial"}
        />
        <meta
          property="og:image"
          content={
            pageProducts.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
        <meta
          property="twitter:image"
          content={
            pageProducts.data.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={pageProducts.data.meta_title || "Página Inicial"}
        />
        <meta
          property="twitter:description"
          content={
            pageProducts.data.meta_description ||
            "Produtos incríveis ao seu alcance!"
          }
        />
      </Head>
      <Header />
      <HeaderTitle title="PRODUTOS" />
      <ListProducts data={products} />
      <SectionReseller data={sectionReseller} />
      <SectionSocial data={sectionDoubts} />
      <Footer data={sectionFooter} />
      <WhatsAppButton />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const products = await prismic.getAllByType("produto");

  const sectionReseller = await prismic.getAllByType("secao_cta_revendedor");

  const sectionDoubts = await prismic.getSingle("secao_contato_duvidas");

  const sectionFooter = await prismic.getSingle("rodape");

  const pageProducts = await prismic.getSingle("produtos");

  return {
    props: {
      pageProducts,
      products,
      sectionDoubts,
      sectionFooter,
      sectionReseller,
    },
    revalidate: 10,
  };
};
