/** 
 * @type {import('next').NextConfig} 
 */ 
const nextConfig = { 
    output: 'export', 
    trailingSlash: true,
    images: {
      loader: 'akamai',
      path: '/public/images',  
    }
  } 
  
  module.exports = nextConfig
  