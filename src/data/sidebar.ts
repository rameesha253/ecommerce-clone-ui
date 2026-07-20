export interface NavItem {
  title: string;
  isRed?: boolean;
  subOptions?: string[];
}

export interface PromoCard {
  title: string;
  subtitle: string;
  actionText: string;
  image: string;
}

export interface CategoryContent {
  sectionTitle?: string;
  items: NavItem[];
  promoCards?: PromoCard[];
}

export interface TopCategory {
  id: string;
  label: string;
  isRed?: boolean;
}

export const topCategories: TopCategory[] = [
  { id: 'WOMEN', label: 'WOMEN' },
  { id: 'KIDS', label: 'KIDS' },
  { id: 'BRIDES', label: 'BRIDES' },
  { id: 'MEN', label: 'MEN' },
  { id: 'SPECIAL_OFFERS', label: 'SPECIAL OFFERS', isRed: true },
];

export const categoryData: Record<string, CategoryContent> = {
  WOMEN: {
    sectionTitle: 'BEST SELLERS',
    items: [
      { title: 'UNSTITCHED', subOptions: ['Luxury Lawn', 'Chiffon Collection', 'Cotton Satin'] },
      { title: 'LUXURY FORMALS', subOptions: ['Wedding Wear', 'Evening Gowns'] },
      { title: 'LUXURY PRET', subOptions: ['Silk Tunics', 'Embellished Kurtas'] },
      { title: 'STITCHED', subOptions: ['Casual Pret', 'Semi-Formals'] },
      { title: 'M.LUXE FABRICS', subOptions: ['Premium Silk', 'Velvet Brocades'] },
      { title: 'JEWELRY', subOptions: ['Necklaces', 'Earrings', 'Bangles'] },
      { title: 'ACCESSORIES', subOptions: ['Footwear', 'Handbags', 'Clutches'] },
      { title: 'FRAGRANCES', subOptions: ['Oud Pour Homme', 'Floral Pour Femme'] },
    ],
    promoCards: [
      {
        title: 'UP TO 50% OFF',
        subtitle: 'Luxury Pret',
        actionText: 'Avail Discount',
        image: '/disc.webp',
      },
      {
        title: 'UP TO 50% OFF',
        subtitle: 'Luxury Formals',
        actionText: 'Avail Discount',
        image: 'disc2.webp',
      },
    ],
  },
  KIDS: {
    items: [
      { title: 'BOYS' },
      { title: 'GIRLS' },
      { title: 'PLAY HOUSE STORIES' },
      { title: 'MOMMY & ME' },
      { title: 'BABA & ME' },
      { title: 'VIEW ALL' },
    ],
    promoCards: [
      {
        title: 'UP TO 50% OFF',
        subtitle: 'Kidswear',
        actionText: 'Avail Discount',
        image: 'kids.webp',
      },
    ],
  },
  BRIDES: {
    items: [
      { title: 'COUTURE', subOptions: ['Bridal Editorial', 'Custom Orders'] },
      { title: 'BRIDALS', subOptions: ['Shehnai Luxury', 'Traditional Wear'] },
      { title: 'READY TO SHIP', subOptions: ['In Stock Formals'] },
      { title: 'MARIA.B BRIDES' },
    ],
  },
  MEN: {
    items: [
      { title: 'NEW ARRIVALS' },
      { title: 'BOYS' },
      { title: 'KURTAS' },
      { title: 'WAISTCOATS' },
      { title: 'COMPLETE SUIT' },
      { title: 'BABA & ME' },
      { title: 'BOTTOMS' },
      { title: 'VIEW ALL' },
    ],
  },
  SPECIAL_OFFERS: {
    items: [
      { title: 'EVERYTHING AT 50% OFF', isRed: true },
      { title: 'EVERYTHING AT 40% OFF', isRed: true },
      { title: 'EVERYTHING AT 30% OFF', isRed: true },
      { title: 'EVERYTHING AT 20% OFF', isRed: true },
      { title: 'EVERYTHING AT 10% OFF', isRed: true },
      { title: 'READY TO WEAR' },
      { title: 'LUXURY FORMALS' },
      { title: 'M.LUXE FABRICS' },
      { title: 'LUXURY PRET' },
      { title: 'KIDS' },
      { title: 'STITCHED' },
      { title: 'UNSTITCHED' },
      { title: 'MENSWEAR' },
      { title: 'JEWELRY' },
      { title: 'ACCESSORIES' },
      { title: 'VIEW ALL' },
    ],
  },
};