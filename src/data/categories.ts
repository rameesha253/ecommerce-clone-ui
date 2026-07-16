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
    image: '/assets/categories/ready-to-wear.jpg',
    link: '/ready-to-wear',
  },
  {
    id: 2,
    title: 'Unstitched',
    image: '/assets/categories/unstitched.jpg',
    link: '/unstitched',
  },
  {
    id: 3,
    title: 'Formals',
    image: '/assets/categories/formals.jpg',
    link: '/formals',
  },
  {
    id: 4,
    title: 'Luxury Pret',
    image: '/assets/categories/luxury-pret.jpg',
    link: '/luxury-pret',
  },
  {
    id: 5,
    title: 'Bridal',
    image: '/assets/categories/bridal.jpg',
    link: '/bridal',
  },
  {
    id: 6,
    title: 'Accessories',
    image: '/assets/categories/accessories.jpg',
    link: '/accessories',
  },
];