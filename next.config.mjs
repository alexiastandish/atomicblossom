/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
    // },

    // images: {
    //     // remotePatterns: [
    //     //   {
    //     //     protocol: 'https',
    //     //     hostname: 'lh3.googleusercontent.com',
    //     //     pathname: '**',
    //     //   },
    //     // ],
  
    //   },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/**',
          },
        ],
      }
    
};

export default nextConfig;
