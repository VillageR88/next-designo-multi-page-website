import Image from 'next/image';
import rightArrowIcon from '../public/assets/shared/desktop/icon-right-arrow.svg';

const SectionDesign = ({ item }: { item: string }): JSX.Element => (
  <section className="flex flex-col items-center gap-[24px]">
    <h2 className="text-[40px] font-medium leading-[48px] tracking-[2px] text-white">{item}</h2>
    <div className="flex items-center gap-[21px]">
      <p className="text-[15px] font-medium tracking-[5px] text-white">VIEW PROJECTS</p>
      <Image className="opacity-100" alt="right arrow icon" src={rightArrowIcon as string} />
    </div>
  </section>
);

export default SectionDesign;
