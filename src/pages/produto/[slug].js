import { useRouter } from "next/router";
import { PageTitle } from "../../components/PageTitle";
import { SectionHeroProduct } from "../../components/details/sectionHeroProduct";
import { Header } from "../../components/header";
import { getPrismicClient } from "../../service/prismic";
import { SectionReseller } from "../../components/sectionReseller";
import { Footer } from "../../components/footer";
import { SectionSocial } from "../../components/sectionSocial";
import Head from "next/head";

export default function PageProduto({
  produto,
  sectionReseller,
  sectionFooter,
  sectionDoubts,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando ...</p>;
  }

  return (
    <>
      <Head>
        <title>{produto.meta_title || "Produto"}</title>
        <meta
          name="description"
          content={produto.meta_description || "Descrição do produto"}
        />
        <meta
          name="keywords"
          content={produto.meta_keywords || "produto, loja, comprar online"}
        />
        <link
          rel="canonical"
          href={`https://www.sualoja.com.br/produto/${produto.slug}`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={produto.meta_og_title || "Produto"}
        />
        <meta
          property="og:description"
          content={produto.meta_og_description || "Descrição do produto"}
        />
        <meta
          property="og:url"
          content={`https://www.sualoja.com.br/produto/${produto.slug}`}
        />
        <meta
          property="og:image"
          content={
            produto.meta_image?.url ||
            "https://www.sualoja.com.br/imagem-padrao.jpg"
          }
        />
        <meta property="og:site_name" content={produto.meta_og_site_name} />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={produto.meta_og_title || "Produto"}
        />
        <meta
          property="twitter:description"
          content={produto.meta_description || "Descrição do produto"}
        />
        <meta
          property="twitter:image"
          content={
            produto.meta_image?.url ||
            "https://www.sualoja.com.br/imagem-padrao.jpg"
          }
        />
      </Head>
      <Header />
      {produto && <SectionHeroProduct data={produto} />}

      <SectionReseller data={sectionReseller} />
      <SectionSocial data={sectionDoubts} />
      <Footer data={sectionFooter} />
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();

  const produtos = await prismic.getAllByType("produto");

  const paths = produtos.map(({ data }) => {
    return {
      params: { slug: data.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient();

  const produtos = await prismic.getAllByType("produto");

  const sectionReseller = await prismic.getAllByType("secao_cta_revendedor");

  const sectionDoubts = await prismic.getSingle("secao_contato_duvidas");

  const sectionFooter = await prismic.getSingle("rodape");

  const produto = produtos.find(({ data }) => {
    return data.slug == context.params.slug;
  });

  return {
    props: {
      produto: produto.data,
      sectionReseller,
      sectionDoubts,
      sectionFooter,
    },
  };
};
