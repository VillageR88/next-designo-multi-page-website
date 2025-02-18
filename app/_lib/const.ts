import type { StaticImageData } from 'next/image';
import appDesign from '../../public/assets/home/desktop/image-app-design.jpg';
import webDesign from '../../public/assets/home/desktop/image-web-design-small.jpg';
import graphicDesign from '../../public/assets/home/desktop/image-graphic-design.jpg';

const navItems = [
  { title: 'OUR COMPANY', href: '../about/' },
  { title: 'LOCATIONS', href: '../locations/' },
  { title: 'CONTACT', href: '../contact/' },
];

const galleryItems: Record<string, string> = {
  express: 'A multi-carrier shipping website for ecommerce businesses',
  transfer: 'Site for low-cost money transfers and sending money within seconds',
  photon: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  builder: 'Connects users with local contractors based on their location',
  blogr: 'Blogr is a platform for creating an online blog or publication',
  camp: 'Get expert training in coding, data, design, and digital marketing',
};

const designRoutes: Record<string, { href: string; img: StaticImageData }> = {
  'app-design': { href: '../app-design/', img: appDesign },
  'web-design': { href: '../web-design/', img: webDesign },
  'graphic-design': { href: '../graphic-design/', img: graphicDesign },
};

export { navItems, galleryItems, designRoutes };
