import Image from 'next/image';
import SectionDesign from '@/components/SectionDesign';
import illustrationPassionate from '../public/assets/home/desktop/illustration-passionate.svg';
import illustrationResourceful from '../public/assets/home/desktop/illustration-resourceful.svg';
import illustrationFriendly from '../public/assets/home/desktop/illustration-friendly.svg';
import webDesign from '../public/assets/home/desktop/image-web-design-large.jpg';
import appDesign from '../public/assets/home/desktop/image-app-design.jpg';
import graphicDesign from '../public/assets/home/desktop/image-graphic-design.jpg';
import webDesignTablet from '../public/assets/home/tablet/image-web-design.jpg';
import appDesignTablet from '../public/assets/home/tablet/image-app-design.jpg';

import graphicDesignTablet from '../public/assets/home/tablet/image-graphic-design.jpg';
import Link from 'next/link';
import webDesignMobile from '../public/assets/home/mobile/image-web-design.jpg';
import appDesignMobile from '../public/assets/home/mobile/image-app-design.jpg';
import graphicDesignMobile from '../public/assets/home/mobile/image-graphic-design.jpg';

const HERO_TITLE = 'Award-winning custom designs and digital branding solutions';
const HERO_DESCRIPTION =
  'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.';
const LEARN_MORE = 'LEARN MORE';

export default function Home(): JSX.Element {
  return (
    <main className="mb-[100px] mt-[67px] flex flex-col items-center gap-[120px] md:mb-0 md:px-[39px] screen1024:mb-[-146px] screen1024:gap-[160px] screen1024:[background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg),no-repeat_calc(50%+13.5em)_100%_url(../public/assets/shared/desktop/bg-pattern-leaf180.svg)]">
      <div className="flex min-h-[843px] w-full max-w-[69.375em] justify-center overflow-x-clip px-[24px] pt-[60px] [background-color:#E7816B] [background-image:url(../public/assets/home/desktop/bg-pattern-hero-home.svg),url(../public/assets/home/desktop/image-hero-phone.png)] [background-position:calc(100%+5em)_50%,50%_18em] [background-repeat:no-repeat] before:[transform:rotate(80deg)] md:rounded-[15px] md:px-0 screen1024:min-h-[640px] screen1024:items-center screen1024:justify-normal screen1024:pl-[95px] screen1024:pt-0 screen1024:[background-position:right,calc(100%+5.5em)_-1.8em]">
        <div className="flex max-w-[540px] flex-col items-center gap-[24px] text-center screen1024:items-start screen1024:gap-[40px] screen1024:text-start">
          <section className="flex flex-col items-center gap-[28px] screen1024:items-start screen1024:gap-[39px]">
            <h1 className="text-[32px] font-medium leading-[36px] text-white md:text-[48px] md:leading-[48px]">
              {HERO_TITLE}
            </h1>
            <p className="max-w-[445px] text-[16px] leading-[26px] text-white">{HERO_DESCRIPTION}</p>
          </section>
          <Link className="button1 flex min-h-[56px] w-full max-w-[152px] items-center justify-center" href="/about/">
            {LEARN_MORE}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex min-h-fit w-full max-w-[69.375em] grid-cols-2 flex-col gap-[24px] px-[24px] [grid-template-areas:'a_b'_'a_c'] [grid-template-rows:minmax(auto,308px)_minmax(auto,308px)] md:px-0 screen1024:grid screen1024:gap-[24px_30px]">
        {[
          {
            area: '[grid-area:a]',
            title: 'WEB DESIGN',
            background: webDesign,
            backgroundTablet: webDesignTablet,
            backgroundMobile: webDesignMobile,
          },
          {
            area: '[grid-area:b]',
            title: 'APP DESIGN',
            background: appDesign,
            backgroundTablet: appDesignTablet,
            backgroundMobile: appDesignMobile,
          },
          {
            area: '[grid-area:c]',
            title: 'GRAPHIC DESIGN',
            background: graphicDesign,
            backgroundTablet: graphicDesignTablet,
            backgroundMobile: graphicDesignMobile,
          },
        ].map((item) => (
          <Link
            href={'/design/'.concat(item.title.toLowerCase().split(' ').join('-'))}
            key={item.title}
            className={`relative flex items-center justify-center rounded-[15px] ease-in-out [background-color:rgba(0,0,0,1)] [transition:scale_600ms] ${item.area} z-[1] min-h-[250px] overflow-hidden md:min-h-[200px] screen1024:min-h-fit [&:hover>img:nth-of-type(1)]:[scale:120%] [&:hover>section_img:nth-of-type(1)]:[animation:_ping2_3s_infinite]`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={item.backgroundMobile.src} />
              <source media="(max-width: 1024px)" srcSet={item.backgroundTablet.src} />
              <Image
                alt=""
                role="presentation"
                className="absolute left-0 top-0 z-[-1] flex size-full rounded-[15px] object-cover opacity-50 [transition:scale_600ms]"
                width={item.background.width}
                height={item.background.height}
                src={item.background.src}
              />
            </picture>
            <SectionDesign item={item.title} />
          </Link>
        ))}
      </div>
      <div className="relative min-h-[718px] w-full overflow-x-clip px-[24px] md:px-0">
        <ul className="mx-auto flex min-h-[412px] w-full max-w-[69.375em] flex-col justify-between gap-[80px] md:gap-[30px] screen1024:flex-row">
          {[
            {
              image: illustrationPassionate as string,
              title: 'passionate',
              description:
                'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
            },
            {
              image: illustrationResourceful as string,
              title: 'resourceful',
              description:
                'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
            },
            {
              image: illustrationFriendly as string,
              title: 'friendly',
              description:
                ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
            },
          ].map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-[48px] md:flex-row screen1024:max-w-[350px] screen1024:flex-col"
            >
              <div
                className={`relative min-h-[202px] min-w-[202px] ${index === 0 ? 'bg-gradient-to-r' : index === 1 ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} rounded-full from-[rgba(93,2,2,calc(0.5*0.2))] to-[rgba(93,2,2,0)]`}
              >
                <Image alt={item.title} src={item.image} />
              </div>
              <section className="flex flex-col items-center gap-[32px] text-center md:items-start md:text-start screen1024:items-center screen1024:text-center">
                <h2 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136]">
                  {item.title.toUpperCase()}
                </h2>
                <p className="text-[16px] leading-[26px] text-[#333136]">{item.description}</p>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
