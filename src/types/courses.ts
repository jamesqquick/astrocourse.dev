export interface Pricing {
  title: string;
  subheading: string;
  cost: number;
  bullets: string[];
  featured?: boolean;
  href: string;
  coupon?: string;
  discount?: number;
}
