import path from 'node:path';
import { galleryItems, designRoutes } from '@/app/_lib/const';
import Link from 'next/link';
import Image from 'next/image';

const DesignRoute = ({ pageFiles, relativeDirname }: { pageFiles: string[]; relativeDirname: string }): JSX.Element => (
  <main className="mb-[160px] mt-[64px] flex flex-col gap-[160px] [background:no-repeat_calc(50%-12.5em)_126px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
    <div className="mx-auto flex min-h-[252px] w-full max-w-[69.375em] items-center justify-center rounded-[15px] [background:no-repeat_100%_50%_url(../public/assets/web-design/desktop/bg-pattern-intro-web.svg)_#E7816B] [padding:64px_191px]">
      <section className="flex max-w-[400px] flex-col items-center justify-center gap-[24px] text-center">
        <h1 className="text-[48px] font-medium leading-[48px] text-white">Web Design</h1>
        <p className="leading-[26px] text-white">
          We build websites that serve as powerful marketing tools and bring memorable brand experiences.
        </p>
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
            <Image className="rounded-t-[15px]" alt={item} width={350} height={320} src={imagePath} />
            <div className="flex min-h-[158px] items-center justify-center rounded-b-[15px] bg-[#FDF3F0] p-[32px]">
              <section className="flex flex-col items-center justify-center gap-[16px] text-center">
                <h2 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#E7816B]">
                  {key.toUpperCase()}
                </h2>
                <p className="leading-[26px] text-[#333136]">{description}</p>
              </section>
            </div>
          </li>
        );
      })}
    </ul>
    <ul className="mx-auto flex w-full max-w-[69.375em] justify-between">
      {Object.keys(designRoutes)
        .filter((item) => item !== relativeDirname)
        .map((item) => (
          <li className="min-h-[308px] w-full max-w-[541px] rounded-[15px] bg-black" key={item}>
            <Link href={designRoutes[item].href}>
              <Image
                width={designRoutes[item].img.width}
                height={designRoutes[item].img.height}
                alt={item}
                className="absolute rounded-[15px] opacity-50"
                src={designRoutes[item].img.src}
              />
            </Link>
          </li>
        ))}
    </ul>
  </main>
);

export default DesignRoute;
