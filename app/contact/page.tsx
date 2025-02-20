import CountriesSection from '@/components/CountriesSection';
import TopCommonHero from '@/components/TopCommonHero';

export default function Home(): JSX.Element {
  return (
    <main className="mt-[67px] flex flex-col gap-[160px] [background:no-repeat_calc(50%+13.5em)_calc(100%+10em)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <TopCommonHero>
        <form className="m-auto flex min-h-[371px] w-full max-w-[380px] flex-col">
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
          <button id="message" type="submit" className="button1 mt-[24px] min-h-[56px] w-full max-w-[152px] self-end">
            SUBMIT
          </button>
        </form>
      </TopCommonHero>
      <CountriesSection />
    </main>
  );
}
