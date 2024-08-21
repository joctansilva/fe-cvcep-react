/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/buscar/cep",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
