import path from 'node:path';
import { galleryItems, designRouteItems } from '@/app/_lib/const';
import Link from 'next/link';
import Image from 'next/image';
import SectionDesign from '@/components/SectionDesign';

const DesignRoute = ({ pageFiles, relativeDirname }: { pageFiles: string[]; relativeDirname: string }): JSX.Element => (
  <main className="mb-[160px] mt-[64px] flex flex-col gap-[160px] [background:no-repeat_calc(50%-12.5em)_126px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
    <div className="mx-auto flex min-h-[252px] w-full max-w-[69.375em] items-center justify-center rounded-[15px] [background:no-repeat_100%_50%_url(../public/assets/web-design/desktop/bg-pattern-intro-web.svg)_#E7816B] [padding:64px_191px]">
      <section className="flex max-w-[400px] flex-col items-center justify-center gap-[24px] text-center">
        <h1 className="text-[48px] font-medium leading-[48px] text-white">{designRouteItems[relativeDirname].title}</h1>
        <p className="leading-[26px] text-white">{designRouteItems[relativeDirname].description}</p>
      </section>
    </div>
    <ul className="mx-auto grid min-h-[478px] w-full max-w-[69.375em] grid-cols-3 gap-[32px_30px]">
      {pageFiles.map((item) => {
        const imagePath = path.join('/assets', relativeDirname, 'desktop', item);
        const key = item.match(/(?<=image-).+(?=.jpg)/)?.[0];
        if (!key) return;
        const description = galleryItems[key];
        return (
          <li key={key} className="flex flex-col rounded-[15px]">
            <Link
              className="[transition:transform_600ms] hover:scale-110 [&:hover>div]:bg-[#E7816B] [&:hover>div_h2]:text-[white] [&:hover>div_p]:text-[white] [&>div]:bg-[#FDF3F0] [&>div_h2]:text-[#E7816B] [&>div_p]:text-[#333136]"
              href="#"
            >
              <Image className="rounded-t-[15px]" alt={item} width={350} height={320} src={imagePath} />
              <div className="flex min-h-[158px] items-center justify-center rounded-b-[15px] p-[32px] ease-in-out [transition:background-color_600ms]">
                <section className="flex flex-col items-center justify-center gap-[16px] text-center">
                  <h2 className="text-[20px] font-medium leading-[26px] tracking-[5px] [transition:color_300ms]">
                    {key.toUpperCase()}
                  </h2>
                  <p className="leading-[26px] [transition:color_300ms]">{description}</p>
                </section>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
    <ul className="mx-auto flex w-full max-w-[69.375em] justify-between">
      {Object.keys(designRouteItems)
        .filter((item) => item !== relativeDirname)
        .map((item) => (
          <li className="min-h-[308px] w-full max-w-[541px] overflow-hidden rounded-[15px] bg-black" key={item}>
            <Link
              className="relative [&:hover_>_img:nth-of-type(1)]:[scale:120%] [&:hover_div_>_img:nth-of-type(1)]:[animation:_ping2_2s_infinite]"
              href={designRouteItems[item].href}
            >
              <Image
                width={designRouteItems[item].img.width}
                height={designRouteItems[item].img.height}
                alt={item}
                className="rounded-[15px] opacity-50 [transition:scale_600ms]"
                src={designRouteItems[item].img.src}
              />
              <div className="absolute top-0 flex size-full items-center justify-center">
                <SectionDesign item={item.replace('-', ' ').toUpperCase()} />
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </main>
);

export default DesignRoute;
