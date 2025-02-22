'use client';

import Link from 'next/link';
import Image from 'next/image';
import mobileMenuOpen from '../../public/assets/shared/mobile/icon-hamburger.svg';
import logoDark from '../../public/assets/shared/desktop/logo-dark.png';
import { navItems } from '../_lib/const';

export default function Nav(): JSX.Element {
  return (
    <>
      <nav className="mt-[35px] flex w-full justify-center md:mt-[64px]">
        <div className="mx-[24px] flex w-full max-w-[69.375em] items-center justify-between md:mx-[39px]">
          <Link
            onClick={() => {
              document.body.classList.remove('nav-open');
            }}
            aria-label="logo"
            href="/"
          >
            <Image
              className="h-[24px] w-[196px]"
              alt="Designo logo"
              width={logoDark.width}
              height={logoDark.height}
              src={logoDark.src}
            />
          </Link>
          <ul className="hidden items-center gap-[42px] md:flex">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link className="nav-item text-[14px] leading-[14px] tracking-[2px] text-[#333136]" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden"
            aria-label="Mobile menu"
            type="button"
            onClick={() => {
              document.body.classList.toggle('nav-open');
              scrollTo({ top: 0 });
            }}
          >
            <Image alt="" role="presentation" src={mobileMenuOpen as string} />
          </button>
        </div>
      </nav>
    </>
  );
}
