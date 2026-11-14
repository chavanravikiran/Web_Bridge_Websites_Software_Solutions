import { IconName } from '../shared/icon/icons';

export interface NavLink {
  label: string;
  /** id of the target section (without #) */
  target: string;
}

export interface Highlight {
  icon: IconName;
  title: string;
  description: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  tags: string[];
}

export interface Technology {
  name: string;
  /** short monogram shown inside the tile */
  mark: string;
  /** brand-ish accent colour used for the tile glow */
  color: string;
}

export interface TechCategory {
  title: string;
  icon: IconName;
  items: Technology[];
}

export type ProjectVisual =
  | 'dashboard'
  | 'laundry'
  | 'menu'
  | 'monitor'
  | 'shop'
  | 'hr'
  | 'website'
  | 'booking'
  | 'listing';

/** 'website' = business/marketing website, 'app' = web application / software */
export type ProjectType = 'website' | 'app';

export interface Project {
  title: string;
  type: ProjectType;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  visual: ProjectVisual;
  /** gradient accent for the illustration */
  accent: [string, string];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ContactInfo {
  brand: string;
  tagline: string;
  email: string;
  /** international format, digits only — used for wa.me links */
  whatsapp: string;
  /** human readable phone */
  phoneDisplay: string;
  linkedin: string;
  github: string;
  location: string;
}
