import CountriesSection from '@/components/CountriesSection';
import TopCommonHero from '@/components/TopCommonHero';
const itemsTopHero = {
  title: 'Contact Us',
  description:
    'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
};

export default function Contact(): JSX.Element {
  return (
    <main className="mt-[34px] flex flex-col gap-[120px] md:mt-[67px] md:px-[39px] screen1024:gap-[160px] screen1024:[background:no-repeat_calc(50%+13.5em)_calc(100%+10em)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <TopCommonHero itemsTopHero={itemsTopHero}>
        <form className="m-auto flex min-h-[371px] w-full flex-col px-[24px] pb-[48px] md:px-[58px] screen1024:mr-[39px] screen1024:max-w-[380px] screen1024:px-0 screen1024:pb-0">
          <label htmlFor="name">
            <input id="name" autoComplete="name" placeholder="Name" type="text" />
          </label>
          <label htmlFor="email">
            <input id="email" required autoComplete="email" placeholder="Email Address" type="email" />
          </label>
          <label htmlFor="phone">
            <input id="phone" autoComplete="tel" placeholder="Phone" type="tel" />
          </label>
          <label htmlFor="message">
            <textarea id="message" required placeholder="Your Message" autoComplete="none" name="message" />
          </label>
          <button
            id="message"
            type="submit"
            className="button1 mt-[40px] min-h-[56px] w-full max-w-[152px] self-center md:mt-[24px] md:self-end"
          >
            SUBMIT
          </button>
        </form>
      </TopCommonHero>
      <CountriesSection />
    </main>
  );
}
