/** @type {import('next').NextConfig} */
const supabaseUrl = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL);


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseUrl.hostname,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;