import Image, { type StaticImageData } from 'next/image';
import CountriesSection from '@/components/CountriesSection';
import TopCommonHero from '@/components/TopCommonHero';
import aboutHero from '../../public/assets/about/desktop/image-about-hero.jpg';
import aboutHeroTablet from '../../public/assets/about/tablet/image-about-hero.jpg';
import worldClassTalent from '../../public/assets/about/desktop/image-world-class-talent.jpg';
import worldClassTalentTablet from '../../public/assets/about/tablet/image-world-class-talent.jpg';
import theRealDeal from '../../public/assets/about/desktop/image-real-deal.jpg';
import theRealDealTablet from '../../public/assets/about/tablet/image-real-deal.jpg';
const itemsTopHero = {
  title: 'About Us',
  description:
    'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
};
const commonHeroItems = {
  wordClass: {
    title: 'World-class talent',
    description:
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.\n\nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    src: worldClassTalent,
    srcTablet: worldClassTalentTablet,
    alt: 'Image of bulbmaster',
  },
  realDeal: {
    title: 'The real deal',
    description:
      'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.\n\nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    src: theRealDeal,
    srcTablet: theRealDealTablet,
    alt: 'Here is a picture of me at the Grand Canyon. DO YOU SEE?',
  },
};

const CommonHero = ({
  commonHeroItem,
}: {
  commonHeroItem: { title: string; description: string; src: StaticImageData; srcTablet: StaticImageData; alt: string };
}): JSX.Element => (
  <div className="mx-auto flex min-h-[640px] w-full max-w-[69.375em] flex-col overflow-x-clip rounded-[15px] screen1024:flex-row [&:nth-of-type(2)]:[background:#FDF3F0_no-repeat_calc(100%-197px)_100%_url(../public/assets/shared/desktop/bg-pattern-three-circles.svg)] screen1024:[&:nth-of-type(2)_img]:rounded-[15px_0_0_15px] [&:nth-of-type(3)]:[background:#FDF3F0_no-repeat_0_100%_url(../public/assets/shared/desktop/bg-pattern-two-circles.svg)] screen1024:[&:nth-of-type(3)]:flex-row-reverse screen1024:[&:nth-of-type(3)_img]:rounded-[0_15px_15px_0] md:[&_img]:rounded-[15px_15px_0_0]">
    <picture className="w-full screen1024:max-w-[476px]">
      <source media="(max-width: 1024px)" srcSet={commonHeroItem.srcTablet.src} />
      <Image className="size-full object-cover" alt={commonHeroItem.alt} src={commonHeroItem.src} />
    </picture>
    <section className="m-auto flex w-full flex-col items-center gap-[24px] p-[24px] text-center md:p-[55px] screen1024:max-w-[524px] screen1024:items-start screen1024:p-[39px] screen1024:text-start">
      <h2 className="text-[32px] font-medium leading-[36px] text-[#E7816B] md:text-[40px] md:leading-[48px]">
        {commonHeroItem.title}
      </h2>
      <p className="whitespace-pre-wrap text-[15px] leading-[26px] text-[#333136] md:text-[16px]">
        {commonHeroItem.description}
      </p>
    </section>
  </div>
);

export default function About(): JSX.Element {
  return (
    <main className="mb-[120px] mt-[34px] flex flex-col gap-[120px] md:mt-[67px] md:px-[39px] screen1024:mb-[160px] screen1024:gap-[160px] screen1024:[background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg),no-repeat_calc(50%+39em)_calc(100%-388px)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <TopCommonHero itemsTopHero={itemsTopHero}>
        <picture className="w-full">
          <source media="(max-width: 1024px)" srcSet={aboutHeroTablet.src} />
          <Image
            className="ml-auto w-full [height:unset] md:rounded-[15px_15px_0_0] screen1024:w-fit screen1024:max-w-fit screen1024:rounded-[0_15px_15px_0]"
            alt="image of people plotting about frontend mentor"
            src={aboutHero}
          />
        </picture>
      </TopCommonHero>
      <CommonHero commonHeroItem={commonHeroItems.wordClass} />
      <CountriesSection />
      <CommonHero commonHeroItem={commonHeroItems.realDeal} />
    </main>
  );
}
