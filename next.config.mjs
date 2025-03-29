/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Tambahkan loader untuk file GLB
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images",
          name: "[name].[hash].[ext]",
        },
      },
    });

    // Tambahkan loader untuk file gambar yang mungkin digunakan oleh model 3D
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif)$/i,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/images",
          outputPath: "static/images",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
  // Jika menggunakan Next.js 13 atau lebih baru dengan app router
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
