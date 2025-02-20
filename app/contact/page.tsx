import CountriesSection from '@/components/CountriesSection';
import TopCommonHero from '@/components/TopCommonHero';

export default function Home(): JSX.Element {
  return (
    <main className="mt-[67px] flex flex-col gap-[160px] [background:no-repeat_calc(50%+13.5em)_calc(100%+10em)_url(../public/assets/shared/desktop/bg-pattern-leaf.svg)]">
      <TopCommonHero>
        <form className="m-auto">CONTENT</form>
      </TopCommonHero>
      <CountriesSection />
    </main>
  );
}
