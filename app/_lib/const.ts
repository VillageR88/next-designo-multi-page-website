import type { StaticImageData } from 'next/image';
import appDesign from '../../public/assets/home/desktop/image-app-design.jpg';
import webDesign from '../../public/assets/home/desktop/image-web-design-small.jpg';
import graphicDesign from '../../public/assets/home/desktop/image-graphic-design.jpg';

const navItems = [
  { title: 'OUR COMPANY', href: '/about/' },
  { title: 'LOCATIONS', href: '/locations/' },
  { title: 'CONTACT', href: '/contact/' },
];

const galleryItems: Record<string, string> = {
  express: 'A multi-carrier shipping website for ecommerce businesses',
  transfer: 'Site for low-cost money transfers and sending money within seconds',
  photon: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  builder: 'Connects users with local contractors based on their location',
  blogr: 'Blogr is a platform for creating an online blog or publication',
  camp: 'Get expert training in coding, data, design, and digital marketing',
  airfilter: 'Solving the problem of poor indoor air quality by filtering the air',
  eyecam: 'Product that lets you edit your favorite photos and videos at any time',
  faceit: 'Get to meet your favorite internet superstar with the faceit app',
  todo: 'A todo app that features cloud sync with light and dark mode',
  loopstudios: 'A VR experience app made for Loopstudios',
  change: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  'boxed-water': 'A simple packaging concept made for Boxed Water',
  science: 'A poster made in collaboration with the Federal Art Project',
};

const designRouteItems: Record<string, { title: string; description: string; href: string; img: StaticImageData }> = {
  'app-design': {
    title: 'App Design',
    description: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    href: '/design/app-design/',
    img: appDesign,
  },
  'web-design': {
    title: 'Web Design',
    description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '/design/web-design/',
    img: webDesign,
  },
  'graphic-design': {
    title: 'Graphic Design',
    description: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    href: '/design/graphic-design/',
    img: graphicDesign,
  },
};

export { navItems, galleryItems, designRouteItems };
