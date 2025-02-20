import Image from 'next/image';
import SectionDesign from '@/components/SectionDesign';
import illustrationPassionate from '../public/assets/home/desktop/illustration-passionate.svg';
import illustrationResourceful from '../public/assets/home/desktop/illustration-resourceful.svg';
import illustrationFriendly from '../public/assets/home/desktop/illustration-friendly.svg';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <main className="mb-[-146px] mt-[67px] flex flex-col items-center gap-[160px] px-[39px] [background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg),no-repeat_calc(50%+13.5em)_100%_url(../public/assets/shared/desktop/bg-pattern-leaf180.svg)]">
      <div className="flex min-h-[640px] w-full max-w-[69.375em] items-center rounded-[15px] pl-[95px] [background-color:#E7816B] [background-image:url(../public/assets/home/desktop/bg-pattern-hero-home.svg),url(../public/assets/home/desktop/image-hero-phone.png)] [background-position:right,calc(100%+5.5em)_-1.8em] [background-repeat:no-repeat] before:[transform:rotate(80deg)]">
        <div className="flex max-w-[540px] flex-col gap-[40px]">
          <section className="flex flex-col gap-[39px]">
            <h1 className="text-[48px] font-medium leading-[48px] text-white">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="max-w-[445px] text-[16px] leading-[26px] text-white">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
              and engaging brand experiences. Find out more about our services.
            </p>
          </section>
          <Link className="button1 flex min-h-[56px] w-full max-w-[152px] items-center justify-center" href="/about/">
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
          <Link
            href={'/design/'.concat(item.title.toLowerCase().split(' ').join('-'))}
            key={item.title}
            className={`flex items-center justify-center rounded-[15px] ease-in-out [background-blend-mode:darken] [background-color:rgba(0,0,0,0.5)] [background-position:center] [background-size:100%] [transition:background_600ms] hover:[background-size:120%] ${item.background} ${item.area} [&:hover_img]:[animation:_ping2_2s_infinite]`}
          >
            <SectionDesign item={item.title} />
          </Link>
        ))}
      </div>
      {/* this first div will be for background container */}
      <div className="relative min-h-[718px] w-full overflow-x-clip">
        <ul className="mx-auto flex min-h-[412px] w-full max-w-[69.375em] justify-between">
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
            <li key={item.title} className="flex max-w-[350px] flex-col items-center gap-[48px]">
              <div
                className={`relative size-[202px] ${index === 0 ? 'bg-gradient-to-r' : index === 1 ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} rounded-full from-[rgba(93,2,2,calc(0.5*0.2))] to-[rgba(93,2,2,0)]`}
              >
                <Image alt={item.title} src={item.image} />
              </div>
              <section className="flex flex-col items-center gap-[32px] text-center">
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
