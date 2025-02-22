import Link from 'next/link';
import Image from 'next/image';
import { locationItems } from '../_lib/const';

export default function Locations(): JSX.Element {
  return (
    <main className="mb-[120px] mt-[34px] flex flex-col gap-[160px] md:mb-[160px] md:mt-[67px] md:px-[39px]">
      <ul className="mx-auto flex w-full max-w-[69.375em] flex-col gap-[32px]">
        {Object.entries(locationItems).map(([locationKey, item]) => (
          <li
            key={locationKey}
            className="flex flex-col-reverse gap-[30px] screen1024:flex-row screen1024:[&:nth-of-type(2)]:flex-row-reverse"
          >
            <div className="flex size-full min-h-[326px] [background:#FDF3F0] md:rounded-[15px] md:p-[0_39px_0_60px] screen1024:max-w-[730px]">
              <div className="m-auto flex min-h-[150px] w-full flex-col items-center gap-[24px] text-center md:max-w-[540px] md:items-stretch md:text-start">
                <h2 className="text-[32px] font-medium leading-[36px] text-[#E7816B] md:text-[40px] md:leading-[48px]">
                  {locationKey
                    .split('-')
                    .map((x) => x.replace(x[0], x[0].toUpperCase()))
                    .join(' ')}
                </h2>
                <div className="flex flex-col justify-between gap-[24px] text-[#333136] md:flex-row [&>section>a>p]:text-[15px] md:[&>section>a>p]:text-[16px] [&>section>h3]:text-[15px] [&>section>h3]:font-bold [&>section>h3]:leading-[26px] md:[&>section>h3]:text-[16px] [&>section]:w-full [&>section]:max-w-[255px]">
                  <section>
                    <h3>{item.address.title}</h3>
                    <Link
                      aria-label={`${locationKey} location`}
                      href={`https://www.google.com/maps/search/?api=1&query=${String(item.map.coordinates.lat)},${String(item.map.coordinates.lng)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="whitespace-pre-wrap">{item.address.description}</p>
                    </Link>
                  </section>
                  <section className="md:ml-[39px]">
                    <h3>Contact</h3>
                    <Link href={item.contact.phone.href}>
                      <p>{item.contact.phone.title}</p>
                    </Link>
                    <Link href={item.contact.email.href}>
                      <p>{item.contact.email.title}</p>
                    </Link>
                  </section>
                </div>
              </div>
            </div>
            <Link
              className="overflow-hidden md:min-w-[350px] md:rounded-[15px]"
              aria-label={`${locationKey} location`}
              href={`https://www.google.com/maps/search/?api=1&query=${String(item.map.coordinates.lat)},${String(item.map.coordinates.lng)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source media="(max-width: 1024px)" srcSet={item.map.imageDataTablet.src} />
                <Image
                  className="flex size-full min-h-[326px] object-cover [transition:scale_600ms] hover:[scale:1.2] md:rounded-[15px]"
                  alt={`${locationKey} location`}
                  width={item.map.imageData.width}
                  height={item.map.imageData.height}
                  src={item.map.imageData.src}
                />
              </picture>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
