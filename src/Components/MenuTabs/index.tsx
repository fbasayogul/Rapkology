import data from '@/data/data.json'
import clsx from 'clsx'
import { useState } from 'react'

type MenuItemProps = {
  name: string
  key: string
}

export const MenuTabs = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string
  setSelectedMenu: (value: string) => void
}) => {
  return (
    <div className="h-fit">
      <h2 className="pb-6 text-4xl font-semibold text-white">
        NE GÖRMEK İSTERSİN?
      </h2>
      <ul className="flex w-full items-center gap-2.5 max-md:overflow-x-scroll max-md:whitespace-nowrap md:flex-wrap">
        {MenuItem.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setSelectedMenu(item.key)
            }}
            className={clsx(
              'border px-5',
              selectedMenu === item.key
                ? 'border-transparent bg-[#F0E74D] py-2 text-[#121212]'
                : 'border-white py-2.5 text-white'
            )}
          >
            {item.name}
          </button>
        ))}
      </ul>
    </div>
  )
}

export const MenuItem: MenuItemProps[] = [
  {
    name: 'Türk Rap',
    key: 'Türk Rap',
  },
  {
    name: 'Yabancı Rap',
    key: 'Yabancı Rap',
  },
  {
    name: 'Rap Haberleri',
    key: 'Rap Haberleri',
  },
  {
    name: 'Haftanın Klipleri',
    key: 'Haftanın Videoları',
  },
  {
    name: 'Ayın Klipleri',
    key: 'Ayın Videoları',
  },
  {
    name: 'Rap Sohbetleri',
    key: 'Rap Sohbetleri',
  },
  {
    name: 'Rap Müsabakaları',
    key: 'Rap Müsabakaları',
  },
]
