export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/src/assets/hero/hero-1.jpg',
    title: 'Luxury Pret Collection',
    subtitle: 'Eid Collection 2024',
    cta: 'Shop Now',
    link: '/collections/eid-2024',
  },
  {
    id: 2,
    image: '/src/assets/hero/hero-2.jpg',
    title: 'Bridal Elegance',
    subtitle: 'Make Your Day Special',
    cta: 'Explore Bridal',
    link: '/bridal',
  },
  {
    id: 3,
    image: '/src/assets/hero/hero-3.jpg',
    title: 'Summer Lawn',
    subtitle: 'New Season, New Styles',
    cta: 'Discover More',
    link: '/collections/summer-lawn',
  },
];