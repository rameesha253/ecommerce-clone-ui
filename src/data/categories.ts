export interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Ready to Wear',
    image: '/src/assets/categories/ready-to-wear.jpg',
    link: '/ready-to-wear',
  },
  {
    id: 2,
    title: 'Unstitched',
    image: '/src/assets/categories/unstitched.jpg',
    link: '/unstitched',
  },
  {
    id: 3,
    title: 'Formals',
    image: '/src/assets/categories/formals.jpg',
    link: '/formals',
  },
  {
    id: 4,
    title: 'Luxury Pret',
    image: '/src/assets/categories/luxury-pret.jpg',
    link: '/luxury-pret',
  },
  {
    id: 5,
    title: 'Bridal',
    image: '/src/assets/categories/bridal.jpg',
    link: '/bridal',
  },
  {
    id: 6,
    title: 'Accessories',
    image: '/src/assets/categories/accessories.jpg',
    link: '/accessories',
  },
];