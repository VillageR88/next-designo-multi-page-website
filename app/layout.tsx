import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '../public/assets/shared/desktop/logo-light.png';
import logoDark from '../public/assets/shared/desktop/logo-dark.png';

const jost = Jost({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '900'],
  variable: '--font-jost',
  subsets: ['latin', 'latin-ext'],
});
export const metadata: Metadata = {
  title: 'Conference Ticket Generator',
  description: 'Conference Ticket Generator',
  applicationName: 'Conference Ticket Generator',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:image" content={undefined} />
      </head>

      <body className={`${jost.variable} flex min-h-dvh flex-col overflow-x-clip font-jost`}>
        <nav className="mt-[64px]">
          <div className="mx-auto flex w-full max-w-[69.375em] items-center justify-between">
            <Link href="../">
              <Image className="h-[24px] w-[196px]" alt="logo" width={196} height={24} src={logoDark} />
            </Link>
            <ul className="flex items-center gap-[42px]">
              {[
                { title: 'OUR COMPANY', href: 'about' },
                { title: 'LOCATIONS', href: 'locations' },
                { title: 'CONTACT', href: 'contact' },
              ].map((item) => (
                <Link
                  className="text-[14px] leading-[14px] tracking-[2px] text-[#333136]"
                  key={item.title}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
