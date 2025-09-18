'use client'

import Link from 'next/link'
import { Button } from '../Button'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface MenuItem {
  name: string
  link: string
}

export const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header
      className={clsx(
        'border-background-900 top-0 z-[500] flex h-20 w-full items-center justify-center border-b bg-[#12121210] max-md:border-0 min-lg:absolute',
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
              <Image
                src="/icon/search-bar.svg"
                alt="search-bar"
                width="24"
                height="22"
              />
            </button>
            <Button
              variant="default"
              text="GİRİŞ YAP"
              skewColor="whitespace-nowrap"
              className="max-lg:px-3 max-lg:py-2"
            />
          </div>
          <button
            type="button"
            className="py-2 min-md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/icon/menu-list.svg"
              alt="menu-list"
              width="32"
              height="14"
            />
          </button>
          {isOpen && (
            <div className="bg-dark border-dark-alt absolute top-20 right-5 z-[1000] flex w-full max-w-60 flex-col items-start justify-center border p-4">
              <div className="flex w-full justify-end">
                <button type="button" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/icon/close.svg"
                    alt="close"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
              <ul className="flex w-full flex-col gap-y-4 pt-1.5 text-white *:w-full *:pb-1.5">
                {MenuData.map((item, index) => (
                  <li
                    key={index}
                    className="border-dark-alt border-b text-base font-medium text-white uppercase last:border-0 last:pb-0"
                  >
                    <Link href={item.link} className="block w-full">
                      {' '}
                      {item.name}{' '}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
