/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * Eksport statyczny: serwis jest w calosci renderowany na etapie budowania
   * i trafia na GitHub Pages. Nie ma backendu, wiec nie ma czego uruchamiac
   * po stronie serwera.
   */
  output: 'export',
  trailingSlash: true,
  images: {
    // Pod `output: 'export'` optymalizator next/image nie dziala.
    unoptimized: true,
  },
};

export default nextConfig;
