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

export interface NewsletterFormData {
  email: string;
}
