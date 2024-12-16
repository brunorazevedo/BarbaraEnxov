import Link from "next/link";
import { PageTitle } from "../components/PageTitle";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ListProducts } from "../components/home/listProducts";
import { SectionSlide } from "../components/home/section-slide";
import { TitleHome } from "../components/home/titleHome";
import { SectionSocial } from "../components/sectionSocial";
import { getPrismicClient } from "../service/prismic";
import { WhatsAppButton } from "../components/whatsappButton";
import { motion } from "framer-motion";
import { SectionReseller } from "../components/sectionReseller";
import Head from "next/head";

export default function Home({
  dataPage,
  products,
  sectionReseller,
  sectionDoubts,
  sectionFooter,
}) {
  return (
    <>
      <Head>
        {/* Título da página */}
        <title>{dataPage.meta_title || "Página Inicial"}</title>

        {/* Meta descrição para SEO */}
        <meta
          name="description"
          content={dataPage.meta_description || "Lençol, Edredom, Jogo de Cama"}
        />
        {/* Palavras-chave (opcional, impacto limitado para SEO moderno) */}
        <meta
          name="keywords"
          content={dataPage.meta_keywords || "Lençol, Edredom, Jogo de Cama"}
        />
        {/* Tag canonical para evitar conteúdo duplicado */}
        <link rel="canonical" href="https://barbaraenxovais.com.br/" />
        {/* Open Graph para redes sociais */}
        <meta
          property="og:title"
          content={dataPage.meta_title || "Página Inicial"}
        />
        <meta
          property="og:description"
          content={
            dataPage.meta_og_description || "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="og:url"
          content={dataPage.meta_og_url || "https://barbaraenxovais.com.br/"}
        />
        <meta
          property="og:site_name"
          content={dataPage.meta_og_site_name || "Página Inicial"}
        />
        <meta
          property="og:image"
          content={
            dataPage.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={dataPage.meta_title || "Página Inicial"}
        />
        <meta
          property="twitter:description"
          content={
            dataPage.meta_description || "Produtos incríveis ao seu alcance!"
          }
        />
        <meta
          property="twitter:image"
          content={
            dataPage.meta_image.url ||
            "https://www.minhaloja.com/imagem-padrao-og.jpg"
          }
        />
      </Head>
      <Header />
      <SectionSlide data={dataPage} />
      <TitleHome data={dataPage} />
      {/* <motion.div
      initial={{opacity: 0, x: -200}}
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -200}}
      transition={{duration: 0.7}}
      > */}
      <ListProducts data={products.slice(0, 6)} />
      {/* </motion.div> */}
      <Link href="/produtos" passHref>
        <Button title="Ver todos os produtos" />
      </Link>
      <SectionReseller data={sectionReseller} />
      <SectionSocial data={sectionDoubts} />
      <Footer data={sectionFooter} />
      <WhatsAppButton />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPages = await prismic.getSingle("home");

  const products = await prismic.getAllByType("produto");

  const sectionDoubts = await prismic.getSingle("secao_contato_duvidas");

  const sectionFooter = await prismic.getSingle("rodape");

  const sectionReseller = await prismic.getAllByType("secao_cta_revendedor");

  return {
    props: {
      dataPage: contentsPages.data,
      products,
      sectionDoubts,
      sectionFooter,
      sectionReseller,
    },
    revalidate: 10,
  };
};
