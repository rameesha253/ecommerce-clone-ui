export interface CategoryProduct {
  id: number;
  title: string;
  price: string;
  image: string;
  tag?: string;
}

export const categoryProducts: Record<string, CategoryProduct[]> = {
  'New Arrivals': [
    { id: 1, title: '3 Piece Embroidered Lawn Suit', price: 'Rs.25,990', image: '/src/assets/products/new1.webp', tag: 'New' },
    { id: 2, title: '3 Piece Embroidered Lawn Suit', price: 'Rs.25,990', image: '/src/assets/products/new2.webp', tag: 'New' },
    { id: 3, title: '3 Piece Embroidered Raw Silk Suit', price: 'Rs.43,990', image: '/src/assets/products/new3.jpg', tag: 'New' },
    { id: 4, title: '3 Piece Embroidered Raw Silk Suit', price: 'Rs.45,990', image: '/src/assets/products/new4.jpg', tag: 'New' },
    { id: 5, title: '3 Piece Embroidered Tissue Silk Suit', price: 'Rs.47,990', image: '/src/assets/products/new5.jpg', tag: 'New' },
    { id: 5, title: '3 Piece Embroidered Tissue Silk Suit', price: 'Rs.47,990', image: '/src/assets/products/new6.webp', tag: 'New' },
  ],
  'Luxury Pret': [
    { id: 1, title: 'Luxury Pret Embroidered Suit', price: 'Rs.39,990', image: '/src/assets/products/pret1.webp', tag: 'New' },
    { id: 2, title: 'Luxury Pret Formal Dress', price: 'Rs.42,990', image: '/src/assets/products/pret2.webp', tag: 'New' },
    { id: 3, title: 'Luxury Pret Silk Ensemble', price: 'Rs.44,990', image: '/src/assets/products/pret3.webp', tag: 'New' },
    { id: 4, title: 'Luxury Pret Chiffon Set', price: 'Rs.46,990', image: '/src/assets/products/pret4.webp', tag: 'New' },
    { id: 5, title: 'Luxury Pret Embellished Suit', price: 'Rs.48,990', image: '/src/assets/products/pret5.webp', tag: 'New' },
  ],
  'Luxury Formals': [
    { id: 1, title: 'Heavily Embroidered Formal Suit', price: 'Rs.55,990', image: '/src/assets/products/lux1.jpg', tag: 'Formal' },
    { id: 2, title: 'Bridal Formal Lehenga', price: 'Rs.89,990', image: '/src/assets/products/lux2.jpg', tag: 'Formal' },
    { id: 3, title: 'Velvet Embroidered Formal Set', price: 'Rs.62,990', image: '/src/assets/products/lux3.webp', tag: 'Formal' },
    { id: 4, title: 'Organza Formal Dress', price: 'Rs.58,990', image: '/src/assets/products/lux4.jpg', tag: 'Formal' },
    { id: 5, title: 'Pearl Work Formal Ensemble', price: 'Rs.71,990', image: '/src/assets/products/lux5.jpg', tag: 'Formal' },
  ],
  'Kidswear': [
    { id: 1, title: 'Girls Embroidered Lawn Suit', price: 'Rs.12,990', image: '/src/assets/products/kid1.webp', tag: 'Kids' },
    { id: 2, title: 'Boys Cotton Kurta Set', price: 'Rs.9,990', image: '/src/assets/products/kid2.webp', tag: 'Kids' },
    { id: 3, title: 'Girls Party Frock', price: 'Rs.15,990', image: '/src/assets/products/kid3.webp', tag: 'Kids' },
    { id: 4, title: 'Boys Waistcoat Set', price: 'Rs.13,990', image: '/src/assets/products/kid4.webp', tag: 'Kids' },
    { id: 5, title: 'Unisex Casual Outfit', price: 'Rs.8,490', image: '/src/assets/products/kid5.webp', tag: 'Kids' },
  ],
  'Unstitched': [
    { id: 1, title: '3 Piece Embroidered Lawn', price: 'Rs.19,990', image: '/src/assets/products/uns1.jpg', tag: 'Unstitched' },
    { id: 2, title: '3 Piece Chiffon Printed', price: 'Rs.22,990', image: '/src/assets/products/uns2.jpg', tag: 'Unstitched' },
    { id: 3, title: '3 Piece Silk Embroidered', price: 'Rs.28,990', image: '/src/assets/products/uns3.jpg', tag: 'Unstitched' },
    { id: 4, title: '3 Piece Cotton Jute', price: 'Rs.17,990', image: '/src/assets/products/uns4.jpg', tag: 'Unstitched' },
    { id: 5, title: '3 Piece Organza Suit', price: 'Rs.26,990', image: '/src/assets/products/uns5.jpg', tag: 'Unstitched' },
  ],
  'M.Luxe Fabrics': [
    { id: 1, title: 'Pure Chiffon Dupatta', price: 'Rs.11,990', image: '/src/assets/products/lux1.jpg', tag: 'Fabric' },
    { id: 2, title: 'Silk Embroidered Shawl', price: 'Rs.19,990', image: '/src/assets/products/lux2.jpg', tag: 'Fabric' },
    { id: 3, title: 'Raw Silk Fabric Roll', price: 'Rs.15,990', image: '/src/assets/products/lux3.webp', tag: 'Fabric' },
    { id: 4, title: 'Velvet Evening Fabric', price: 'Rs.24,990', image: '/src/assets/products/lux4.jpg', tag: 'Fabric' },
    { id: 5, title: 'Organza Embroidered Piece', price: 'Rs.17,990', image: '/src/assets/products/lux5.jpg', tag: 'Fabric' },
  ],
  'Accessories': [
    { id: 1, title: 'Embroidered Clutch', price: 'Rs.8,990', image: '/src/assets/category-products/accessories-1.jpg', tag: 'Accessory' },
    { id: 2, title: 'Beaded Necklace Set', price: 'Rs.12,990', image: '/src/assets/category-products/accessories-2.jpg', tag: 'Accessory' },
    { id: 3, title: 'Printed Silk Scarf', price: 'Rs.5,990', image: '/src/assets/category-products/accessories-3.jpg', tag: 'Accessory' },
    { id: 4, title: 'Designer Bangles', price: 'Rs.9,990', image: '/src/assets/category-products/accessories-4.jpg', tag: 'Accessory' },
    { id: 5, title: 'Stone-Studded Earrings', price: 'Rs.7,990', image: '/src/assets/category-products/accessories-5.jpg', tag: 'Accessory' },
  ],
};

export const categories = [
  'New Arrivals',
  'Luxury Pret',
  'Luxury Formals',
  'Kidswear',
  'Unstitched',
  'M.Luxe Fabrics',
  'Accessories',
];