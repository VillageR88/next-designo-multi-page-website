import Image, { type StaticImageData } from 'next/image';
import canada from '../../public/assets/shared/desktop/illustration-canada.svg';
import australia from '../../public/assets/shared/desktop/illustration-australia.svg';
import unitedKingdom from '../../public/assets/shared/desktop/illustration-united-kingdom.svg';
import Link from 'next/link';
import aboutHero from '../../public/assets/about/desktop/image-about-hero.jpg';
import worldClassTalent from '../../public/assets/about/desktop/image-world-class-talent.jpg';
import theRealDeal from '../../public/assets/about/desktop/image-real-deal.jpg';

const commonHeroItems = {
  wordClass: {
    title: 'World-class talent',
    description:
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.\n\nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    src: worldClassTalent,
    alt: 'Image of bulbmaster',
  },
  realDeal: {
    title: 'The real deal',
    description:
      'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.\n\nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    src: theRealDeal,
    alt: 'Here is a picture of me at the Grand Canyon. DO YOU SEE?',
  },
};

const CommonHero = ({
  commonHeroItem,
}: {
  commonHeroItem: { title: string; description: string; src: StaticImageData; alt: string };
}): JSX.Element => (
  <div className="mx-auto flex min-h-[640px] w-full max-w-[69.375em] rounded-[15px] [&:nth-of-type(2)]:[background:#FDF3F0_no-repeat_calc(100%-197px)_100%_url(../public/assets/shared/desktop/bg-pattern-three-circles.svg)] [&:nth-of-type(2)_img]:rounded-l-[15px] [&:nth-of-type(3)]:flex-row-reverse [&:nth-of-type(3)]:[background:#FDF3F0_no-repeat_0_100%_url(../public/assets/shared/desktop/bg-pattern-two-circles.svg)] [&:nth-of-type(3)_img]:rounded-r-[15px]">
    <Image className="" alt={commonHeroItem.alt} src={commonHeroItem.src} />
    <section className="m-auto flex w-full max-w-[445px] flex-col gap-[24px]">
      <h2 className="text-[40px] font-medium leading-[48px] text-[#E7816B]">{commonHeroItem.title}</h2>
      <p className="whitespace-pre-wrap leading-[26px] text-[#333136]">{commonHeroItem.description}</p>
    </section>
  </div>
);

export default function Home(): JSX.Element {
  return (
    <main className="mb-[160px] mt-[67px] flex flex-col gap-[160px] [background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg),no-repeat_calc(50%+39em)_calc(100%-388px)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <div className="mx-auto flex min-h-[480px] w-full max-w-[69.375em] items-center rounded-[15px] pl-[95px] [background-color:#E7816B] [background-image:url(../public/assets/about/desktop/bg-pattern-hero-about-desktop.svg)] [background-position:left_bottom] [background-repeat:no-repeat]">
        <div className="flex max-w-[540px] flex-col gap-[40px]">
          <section className="flex flex-col gap-[39px]">
            <h1 className="text-[48px] font-medium leading-[48px] text-white">About Us</h1>
            <p className="max-w-[445px] text-[16px] leading-[26px] text-white">
              Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered
              with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re
              always looking forward to creating brands, products, and digital experiences that connect with our
              clients’ audiences.
            </p>
          </section>
        </div>
        <Image
          className="ml-auto rounded-r-[15px]"
          alt="image of people plotting about frontend mentor"
          src={aboutHero}
        />
      </div>
      <CommonHero commonHeroItem={commonHeroItems.wordClass} />
      <ul className="mx-auto flex w-full max-w-[69.375em] justify-between">
        {[
          { title: 'CANADA', img: canada as string },
          {
            title: 'AUSTRALIA',
            img: australia as string,
          },
          {
            title: 'UNITED KINGDOM',
            img: unitedKingdom as string,
          },
        ].map((item, index) => (
          <li key={item.title} className="flex w-full max-w-[350px] flex-col items-center">
            <div
              className={`relative size-[202px] ${index === 0 ? 'bg-gradient-to-b' : index === 1 ? 'bg-gradient-to-r' : 'bg-gradient-to-t'} rounded-full bg-white from-[rgba(93,2,2,calc(0.5*0.2))] to-[rgba(93,2,2,0)]`}
            >
              <Image alt={item.title} src={item.img} />
            </div>
            <h2 className="mt-[48px] font-medium leading-[26px] tracking-[5px] text-[#333136]">{item.title}</h2>
            <Link
              className="mt-[32px] flex min-h-[56px] w-full max-w-[152px] items-center justify-center rounded-[8px] bg-[#E7816B] text-[15px] font-medium tracking-[1px] text-white"
              href="#"
            >
              SEE LOCATION
            </Link>
          </li>
        ))}
      </ul>
      <CommonHero commonHeroItem={commonHeroItems.realDeal} />
    </main>
  );
}
