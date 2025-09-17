import Link from 'next/link'
import { Button } from '../Button'
import clsx from 'clsx'

interface MenuItem {
  name: string
  link: string
}

export const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={clsx(
        'top-0 z-[500] flex h-20 w-full items-center justify-center border-b border-[#2A2A2A] bg-[#12121210] max-md:border-0 min-lg:absolute',
        className
      )}
    >
      <div className="container flex items-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link href={'/'} className="min-w-[180px] max-md:w-[180px]">
              <img src="/img/logo.svg" alt="Rapkology Logo" />
            </Link>
            <ul className="flex items-center gap-x-4 pl-8 max-md:hidden min-lg:gap-x-[30px] min-lg:pl-24">
              {MenuData.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-white uppercase max-lg:text-xs"
                >
                  <Link href={item.link}> {item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-5 max-md:hidden min-lg:gap-x-9">
            <button type="button" className="max-lg:hidden">
              <img src="/icon/search-bar.svg" alt="Search Bar" />
            </button>
            <Button
              variant="default"
              text="GİRİŞ YAP"
              skewColor="whitespace-nowrap"
              className="max-lg:px-3 max-lg:py-2"
            />
          </div>
          <button type="button" className="min-md:hidden">
            <img src="/icon/menu-list.svg" alt="Menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

export const MenuData: MenuItem[] = [
  {
    name: 'BLOG',
    link: '/blog',
  },
  {
    name: 'ETKİNLİKLER',
    link: '/etkinlikler',
  },
  {
    name: 'MÜZİKLER',
    link: '/müzikler',
  },
  {
    name: 'VİDEOLAR',
    link: '/videolar',
  },
  {
    name: 'İLETİŞİM',
    link: '/iletisim',
  },
]
