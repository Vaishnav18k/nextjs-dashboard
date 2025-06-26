// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */

  
// };

// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ❗ Ignores ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
