import Link from 'next/link';
import Image from 'next/image';
import mapCanada from '../../public/assets/locations/desktop/image-map-canada.png';

const locationItems = {
  canada: {},
  australia: {},
  'united-kingdom': {},
};

export default function Locations(): JSX.Element {
  return (
    <main className="mt-[67px] flex flex-col gap-[160px]">
      <ul className="mx-auto flex w-full max-w-[69.375em] flex-col">
        {Object.keys(locationItems).map((item) => (
          <li key={item} className="flex gap-[30px]">
            <div className="flex size-full min-h-[326px] max-w-[730px] rounded-[15px] [background:#FDF3F0]">
              <div className="m-auto flex min-h-[150px] w-full max-w-[540px] flex-col gap-[24px]">
                <h2 className="text-[40px] font-medium leading-[48px] text-[#E7816B]">
                  {item
                    .split('-')
                    .map((x) => x.replace(x[0], x[0].toUpperCase()))
                    .join(' ')}
                </h2>
                <div className="flex justify-between text-[#333136] [&>section>h3]:text-[16px] [&>section>h3]:font-medium [&>section>h3]:leading-[26px] [&>section]:w-full [&>section]:max-w-[255px]">
                  <section>
                    <h3>Location Title</h3>
                    <Link href="#">
                      <p className="whitespace-pre-wrap">{'xyz\nNextLineXyz'}</p>
                    </Link>
                  </section>
                  <section>
                    <h3>Location Title</h3>
                    <Link href="#">
                      <p>desc</p>
                    </Link>
                    <Link href="#">
                      <p>desc2</p>
                    </Link>
                  </section>
                </div>
              </div>
            </div>
            <Link aria-label="Canada location" href="#">
              <Image
                className="flex size-full rounded-[15px] object-cover"
                alt="Canada location"
                width={mapCanada.width}
                height={mapCanada.height}
                src={mapCanada.src}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
