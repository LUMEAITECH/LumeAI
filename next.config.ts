/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yh6f329f2u.ufs.sh', // Add the correct hostname
        port: '',
        pathname: '/f/DzBySEN1N0pQXgtk265sZV6gQmHGFhCdo87Ykvl0NSOAIpDR', // Adjust the pathname if necessary
      },
      {
        protocol: 'https',
        hostname: 'utfs.io', // Add the other hostname
        port: '',
        pathname: '/a/**', // Use a wildcard if multiple paths are required
      },
    ],
  },
};

module.exports = nextConfig;
