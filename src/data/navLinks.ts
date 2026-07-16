export interface NavLink {
  id: number;
  title: string;
  path: string;
}

export interface TopBarLink {
  title: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { id: 1, title: 'NEW ARRIVALS', path: '/new-arrivals' },
  { id: 2, title: 'READY TO WEAR', path: '/ready-to-wear' },
  { id: 3, title: 'UNSTITCHED', path: '/unstitched' },
  { id: 4, title: 'FORMALS', path: '/formals' },
  { id: 5, title: 'LUXURY PRET', path: '/luxury-pret' },
  { id: 6, title: 'BRIDAL', path: '/bridal' },
  { id: 7, title: 'ACCESSORIES', path: '/accessories' },
  { id: 8, title: 'SALE', path: '/sale' },
];

export const topBarLinks: TopBarLink[] = [
  { title: 'Store Locator', path: '/store-locator' },
  { title: 'Track Order', path: '/track-order' },
  { title: 'Contact Us', path: '/contact' },
];