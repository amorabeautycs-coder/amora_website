// Utility function to create page URLs
export function createPageUrl(pageName) {
  const routes = {
    Home: '/',
    Products: '/products',
    ProductDetail: '/product-detail',
    About: '/about',
    FAQ: '/faq',
    Contact: '/contact',
  };
  return routes[pageName] || '/';
}

// Utility function to merge class names (for Tailwind)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Utility function to get product image path
// If image_url starts with http/https, use it as is (external URL)
// Otherwise, treat it as a local image in /public/images/products/
export function getProductImageUrl(imageUrl) {
  if (!imageUrl) {
    return '/images/products/placeholder.svg'; // fallback image
  }
  
  // If it's already a full URL, return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // If it's already a path starting with /, return as is
  if (imageUrl.startsWith('/')) {
    return imageUrl;
  }
  
  // Otherwise, prepend the local images path
  return `/images/products/${imageUrl}`;
}
