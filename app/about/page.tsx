import Image from 'next/image';
import aboutHero from '../../public/assets/about/desktop/image-about-hero.jpg';
import worldClassTalent from '../../public/assets/about/desktop/image-world-class-talent.jpg';

export default function Home(): JSX.Element {
  return (
    <main className="mb-[160px] mt-[67px] flex flex-col gap-[160px] [background:no-repeat_calc(50%-12.5em)_320px_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
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
      <div className="mx-auto flex min-h-[640px] w-full max-w-[69.375em] rounded-[15px] [background:#FDF3F0_no-repeat_calc(100%-197px)_100%_url(../public/assets/shared/desktop/bg-pattern-three-circles.svg)]">
        <Image className="rounded-l-[15px]" alt="image of bulbmaster" src={worldClassTalent} />
        <section className="m-auto flex w-full max-w-[445px] flex-col gap-[24px]">
          <h2 className="text-[40px] font-medium leading-[48px] text-[#E7816B]">World-class talent</h2>
          <p className="whitespace-pre-wrap">
            {
              'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.\n\nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
            }
          </p>
        </section>
      </div>
    </main>
  );
}
