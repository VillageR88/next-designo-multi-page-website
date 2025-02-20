import Link from 'next/link';
import Image from 'next/image';
import mapCanada from '../../public/assets/locations/desktop/image-map-canada.png';
import mapAustralia from '../../public/assets/locations/desktop/image-map-australia.png';
import mapUK from '../../public/assets/locations/desktop/image-map-united-kingdom.png';

const locationItems = {
  canada: {
    address: { title: 'Designo Central Office', description: '3886 Wellington Street\nToronto, Ontario M9C 3J5' },
    contact: {
      phone: { title: 'P : +1 253-863-8967', href: 'tel:+12538638967' },
      email: { title: 'M : contact@designo.co', href: 'mailto:contact@designo.co' },
    },
    map: { imageData: mapCanada, coordinates: { lat: 43.6532, lng: -79.3832 } },
  },
  australia: {
    address: { title: 'Designo AU Office', description: '19 Balonne Street\nNew South Wales 2443' },
    contact: {
      phone: { title: 'P : (02) 6720 9092', href: 'tel:+0267209092' },
      email: { title: 'M : contact@designo.au', href: 'mailto:contact@designo.au' },
    },
    map: { imageData: mapAustralia, coordinates: { lat: -31.2532, lng: 146.9211 } },
  },
  'united-kingdom': {
    address: { title: 'Designo UK Office', description: '13  Colorado Way\nRhyd-y-fro SA8 9GA' },
    contact: {
      phone: { title: 'P : 078 3115 1400', href: 'tel:+07831151400' },
      email: { title: 'M : contact@designo.uk', href: 'mailto:contact@designo.uk' },
    },
    map: { imageData: mapUK, coordinates: { lat: 51.509865, lng: -0.118092 } },
  },
};

export default function Locations(): JSX.Element {
  return (
    <main className="mb-[160px] mt-[67px] flex flex-col gap-[160px]">
      <ul className="mx-auto flex w-full max-w-[69.375em] flex-col gap-[32px]">
        {Object.entries(locationItems).map(([locationKey, item]) => (
          <li key={locationKey} className="flex gap-[30px] [&:nth-of-type(2)]:flex-row-reverse">
            <div className="flex size-full min-h-[326px] max-w-[730px] rounded-[15px] [background:#FDF3F0]">
              <div className="m-auto flex min-h-[150px] w-full max-w-[540px] flex-col gap-[24px]">
                <h2 className="text-[40px] font-medium leading-[48px] text-[#E7816B]">
                  {locationKey
                    .split('-')
                    .map((x) => x.replace(x[0], x[0].toUpperCase()))
                    .join(' ')}
                </h2>
                <div className="flex justify-between text-[#333136] [&>section>h3]:text-[16px] [&>section>h3]:font-bold [&>section>h3]:leading-[26px] [&>section]:w-full [&>section]:max-w-[255px]">
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
                  <section>
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
              className="overflow-hidden rounded-[15px]"
              aria-label={`${locationKey} location`}
              href={`https://www.google.com/maps/search/?api=1&query=${String(item.map.coordinates.lat)},${String(item.map.coordinates.lng)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="flex size-full rounded-[15px] object-cover [transition:scale_600ms] hover:[scale:1.2]"
                alt={`${locationKey} location`}
                width={item.map.imageData.width}
                height={item.map.imageData.height}
                src={item.map.imageData.src}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
