/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fpseuxbfvsjpeqxgiffw.supabase.co",
          port: "",
          pathname: "/**",
        },
      ],
    },
  allowedDevOrigins: [
    "https://akwukwo-staging.azurewebsites.net",
    "http://akwukwo-staging.azurewebsites.net",
    "http://localhost:3000",
  ],
};

export default nextConfig;
