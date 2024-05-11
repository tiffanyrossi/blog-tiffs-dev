/** 
 * @type {import('next').NextConfig} 
 */ 
const nextConfig = { 
    output: 'export', 
    trailingSlash: true,
    images: {
      loader: "custom",
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
      nextImageExportOptimizer_imageFolderPath: "public/images",
      nextImageExportOptimizer_exportFolderPath: "out",
      nextImageExportOptimizer_quality: 75,
      nextImageExportOptimizer_storePicturesInWEBP: true,
      nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
      nextImageExportOptimizer_generateAndUseBlurImages: false,
    },
    future: {

      // by default, if you customize webpack config, they switch back to version 4.
      // Looks like backward compatibility approach.
      webpack5: true,   
    },
  
    webpack(config) {
      config.resolve.fallback = {
  
        // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped.
        ...config.resolve.fallback,  
  
        fs: false, // the solution
      };
      
      return config;
    },  
    } 
  
  module.exports = nextConfig
  