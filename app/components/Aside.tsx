'use client';

import Link from 'next/link';
import { navItems } from '../_lib/const';

export function Aside(): JSX.Element {
  return (
    <aside className="absolute inset-0 z-10 mt-[92px] bg-black/50">
      <nav className="h-[235px] w-full bg-black">
        <ul className="flex h-full flex-col justify-center gap-[32px] px-[24px]">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                onClick={() => {
                  document.body.classList.remove('nav-open');
                }}
                className="nav-item bottom text-[24px] leading-[25px] tracking-[2px] text-white"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
