/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "https://fpseuxbfvsjpeqxgiffw.supabase.co",
          port: "",
          pathname: "/**",
        },
      ],
    },
};

export default nextConfig;
