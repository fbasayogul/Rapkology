import data from '@/data/data.json'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  list?: string
  selectedMenu?: string | undefined
}

export const Explore: React.FC<Props> = ({ list, selectedMenu = '' }) => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes(selectedMenu)
  )

  return (
    <>
      <div
        className={clsx(
          'min-h-dvh pt-24 max-lg:pt-12',
          list === 'list-2'
            ? 'grid grid-cols-2 gap-x-8 gap-y-14'
            : 'flex flex-col gap-y-20'
        )}
      >
        {favori.length > 0 ? (
          favori.map((item, index) => (
            <div
              className={clsx(
                list === 'list-2'
                  ? 'flex flex-col gap-y-5'
                  : 'flex items-start gap-x-5 max-md:flex-col'
              )}
              key={index}
            >
              <div className="flex flex-col max-md:w-full">
                <div
                  className="h-[210px] min-w-[300px] !bg-cover !bg-center !bg-no-repeat"
                  style={{
                    background: `url('${item.attributes.img}')`,
                  }}
                ></div>
                <p className="pt-7 font-light text-[#3B3B3B]">
                  {new Date(item.createdAt).toLocaleString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex h-full flex-1 flex-col">
                <div className="flex items-center gap-x-4 pb-6">
                  <div
                    className="size-8 rounded-xl !bg-cover !bg-center !bg-no-repeat"
                    style={{
                      background: `url('${item.attributes.img}')`,
                    }}
                  ></div>
                  <p className="text-white">{item.attributes.authors}</p>
                </div>
                <p
                  className={clsx(
                    'text-2xl font-semibold uppercase max-lg:text-xl',
                    list === 'list-2' ? 'text-xl' : null
                  )}
                >
                  {item.attributes.desc.length > 150
                    ? item.attributes.desc.substring(0, 150) + '...'
                    : item.attributes.desc}
                </p>
                <span className="mt-6 h-px w-full bg-[#3B3B3B]" />
                <Link
                  href={item.attributes.slug}
                  className={clsx(
                    'mt-auto text-base font-normal text-white',
                    list === 'list-2' ? '!mt-6' : null
                  )}
                >
                  Daha Fazla Oku
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-2xl text-white"> İçerik Bulunamadı </div>
        )}
      </div>
    </>
  )
}
