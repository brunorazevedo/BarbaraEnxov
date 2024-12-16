/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io", "barbaraenxovais.cdn.prismic.io"],
  },
  async redirects() {
    return [
      // Redirecionar de sem "www" para "www"
      {
        source: "/:path*",
        has: [{ type: "host", value: "barbaraenxovais.com.br" }],
        destination: "https://www.barbaraenxovais.com.br/:path*",
        permanent: true,
      },
      // Se preferir redirecionar de "www" para sem "www", use este:
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.barbaraenxovais.com.br' }],
      //   destination: 'https://barbaraenxovais.com.br/:path*',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
