import Image from 'next/image';
import rightArrowIcon from '../public/assets/shared/desktop/icon-right-arrow.svg';
import illustrationPassionate from '../public/assets/home/desktop/illustration-passionate.svg';
import illustrationResourceful from '../public/assets/home/desktop/illustration-resourceful.svg';
import illustrationFriendly from '../public/assets/home/desktop/illustration-friendly.svg';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <main className="mt-[67px] flex flex-col gap-[160px] [background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
        <div className="mx-auto flex min-h-[640px] w-full max-w-[69.375em] items-center rounded-[15px] pl-[95px] [background-color:#E7816B] [background-image:url(../public/assets/home/desktop/bg-pattern-hero-home.svg),url(../public/assets/home/desktop/image-hero-phone.png)] [background-position:right,calc(100%+5.5em)_-1.8em] [background-repeat:no-repeat]">
          <div className="flex max-w-[540px] flex-col gap-[40px]">
            <section className="flex flex-col gap-[39px]">
              <h1 className="text-[48px] font-medium leading-[48px] text-white">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="max-w-[445px] text-[16px] leading-[26px] text-white">
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app
                design, and engaging brand experiences. Find out more about our services.
              </p>
            </section>
            <Link
              className="flex min-h-[56px] w-full max-w-[152px] items-center justify-center rounded-[8px] bg-white text-[15px] font-medium tracking-[1px] text-[#333136]"
              href="about/"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="mx-auto grid min-h-[640px] w-full max-w-[69.375em] grid-cols-2 gap-[24px_30px] [grid-template-areas:'a_b'_'a_c']">
          {[
            {
              area: '[grid-area:a]',
              title: 'WEB DESIGN',
              background: 'bg-[url(../public/assets/home/desktop/image-web-design-large.jpg)]',
            },
            {
              area: '[grid-area:b]',
              title: 'APP DESIGN',
              background: 'bg-[url(../public/assets/home/desktop/image-app-design.jpg)]',
            },
            {
              area: '[grid-area:c]',
              title: 'GRAPHIC DESIGN',
              background: 'bg-[url(../public/assets/home/desktop/image-graphic-design.jpg)]',
            },
          ].map((item) => (
            <a
              href={item.title.toLowerCase().split(' ').join('-')}
              key={item.title}
              className={`flex items-center justify-center rounded-[15px] ease-in-out [background-blend-mode:darken] [background-color:rgba(0,0,0,0.5)] [background-position:center] [background-size:100%] [transition:background_600ms] hover:[background-size:120%] ${item.background} ${item.area} [&:hover_img]:[animation:_ping2_2s_infinite]`}
            >
              <section className="flex flex-col items-center gap-[24px]">
                <h2 className="text-[40px] font-medium leading-[48px] tracking-[2px] text-white">{item.title}</h2>
                <div className="flex items-center gap-[21px]">
                  <p className="text-[15px] font-medium tracking-[5px] text-white">VIEW PROJECTS</p>
                  <Image className="opacity-100" alt="right arrow icon" src={rightArrowIcon as string} />
                </div>
              </section>
            </a>
          ))}
        </div>
        {/* this first div will be for background container */}
        <div>
          <ul className="mx-auto flex min-h-[412px] w-full max-w-[69.375em] justify-between">
            {[
              {
                image: illustrationPassionate as string,
                title: 'passionate',
              },
              {
                image: illustrationResourceful as string,
                title: 'resourceful',
              },
              {
                image: illustrationFriendly as string,
                title: 'friendly',
              },
            ].map((item) => (
              <li key={item.title} className="flex flex-col">
                <div className="relative size-[202px]">
                  <div className="inset-0 rounded-full bg-gradient-to-r from-[rgba(93,2,2,calc(0.5*0.2))] to-[rgba(93,2,2,0)]">
                    {' '}
                    <Image alt={item.title} src={item.image} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
