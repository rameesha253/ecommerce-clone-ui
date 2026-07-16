export interface NavLink {
  id: number;
  title: string;
  path: string;
}

export interface TopBarLink {
  title: string;
  path: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface Collection {
  id: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: 'New' | 'Sale' | 'Best Seller';
  rating: number;
  reviews: number;
}

export interface ProductCardProps {
  product: Product;
}

export interface NewsletterFormData {
  email: string;
}
