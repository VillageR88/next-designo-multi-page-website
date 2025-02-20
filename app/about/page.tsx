import Image, { type StaticImageData } from 'next/image';
import CountriesSection from '@/components/CountriesSection';
import TopCommonHero from '@/components/TopCommonHero';
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

export default function About(): JSX.Element {
  return (
    <main className="mb-[160px] mt-[67px] flex flex-col gap-[160px] px-[39px] [background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg),no-repeat_calc(50%+39em)_calc(100%-388px)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <TopCommonHero>
        <Image
          className="ml-auto rounded-r-[15px]"
          alt="image of people plotting about frontend mentor"
          src={aboutHero}
        />
      </TopCommonHero>
      <CommonHero commonHeroItem={commonHeroItems.wordClass} />
      <CountriesSection />
      <CommonHero commonHeroItem={commonHeroItems.realDeal} />
    </main>
  );
}
