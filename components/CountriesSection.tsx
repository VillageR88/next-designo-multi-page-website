import Image from 'next/image';
import canada from '../public/assets/shared/desktop/illustration-canada.svg';
import australia from '../public/assets/shared/desktop/illustration-australia.svg';
import unitedKingdom from '../public/assets/shared/desktop/illustration-united-kingdom.svg';
import Link from 'next/link';
import { locationItems } from '@/app/_lib/const';

const CountriesSection = (): JSX.Element => (
  <ul className="mx-auto flex w-full max-w-[69.375em] justify-between">
    {[
      { title: 'CANADA', img: canada as string, map: locationItems.canada.map.coordinates },
      {
        title: 'AUSTRALIA',
        img: australia as string,
        map: locationItems.australia.map.coordinates,
      },
      {
        title: 'UNITED KINGDOM',
        img: unitedKingdom as string,
        map: locationItems['united-kingdom'].map.coordinates,
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
          className="mt-[32px] flex min-h-[56px] w-full max-w-[152px] items-center justify-center rounded-[8px] bg-[#E7816B] text-[15px] font-medium tracking-[1px] text-white [transition:background-color_300ms] hover:bg-[#FFAD9B]"
          href={`https://www.google.com/maps/search/?api=1&query=${String(item.map.lat)},${String(item.map.lng)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          SEE LOCATION
        </Link>
      </li>
    ))}
  </ul>
);

export default CountriesSection;
