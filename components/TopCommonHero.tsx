const TopCommonHero = ({
  children,
  itemsTopHero,
}: {
  children: React.ReactNode;
  itemsTopHero: { title: string; description: string };
}): JSX.Element => (
  <div className="mx-auto flex min-h-[480px] w-full max-w-[69.375em] flex-col items-center overflow-x-clip text-center [background-color:#E7816B] [background-image:url(../public/assets/about/desktop/bg-pattern-hero-about-desktop.svg)] [background-position:left_bottom] [background-repeat:no-repeat] md:rounded-[15px] screen1024:flex-row screen1024:text-start [&:has(img)]:flex-col-reverse screen1024:[&:has(img)]:flex-row">
    <div className="flex w-full justify-center gap-[40px] px-[24px] py-[72px] md:p-[39px] screen1024:max-w-[635px]">
      <section className="flex flex-col gap-[39px] screen1024:max-w-[458px]">
        <h1 className="text-[32px] font-medium leading-[36px] text-white md:text-[48px] md:leading-[48px]">
          {itemsTopHero.title}
        </h1>
        <p className="text-[15px] leading-[26px] text-white md:text-[16px] screen1024:max-w-[445px]">
          {itemsTopHero.description}
        </p>
      </section>
    </div>
    {children}
  </div>
);

export default TopCommonHero;
