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
            <div
              key={item.title}
              className={`flex items-center justify-center rounded-[15px] ${item.background} ${item.area}`}
            >
              <section className="flex flex-col items-center gap-[24px]">
                <h2 className="text-[40px] font-medium leading-[48px] tracking-[2px] text-white">{item.title}</h2>
                <a
                  className="text-[15px] font-medium tracking-[5px] text-white"
                  href={item.title.toLowerCase().split(' ').join('-')}
                >
                  VIEW PROJECTS
                </a>
              </section>
              c
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
