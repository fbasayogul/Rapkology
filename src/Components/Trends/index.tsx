'use client'

import data from '@/data/data.json'
import Link from 'next/link'
import { Button } from '../Button'
import clsx from 'clsx'
import Image from 'next/image'

export const Trends = ({ grid, count }: { grid?: string; count?: number }) => {
  const trend = data.filter((item) => item.attributes?.trends === false)
  const trendCount = count ?? trend.length

  return (
    <section className="mt-10 flex w-full justify-center">
      <div className="container">
        <div className="flex items-center gap-x-6">
          <h2 className="text-5xl font-bold text-white max-md:text-4xl">
            TRENDLER
          </h2>
          <Image src="/icon/trend.svg" alt="trend" width="52" height="33" />
        </div>
        <ul
          className={clsx(
            'mt-20 grid grid-cols-3 gap-x-5 gap-y-12 max-lg:grid-cols-2 max-sm:grid-cols-1',
            grid
          )}
        >
          {trend.slice(0, trendCount).map((item, index) => (
            <li key={index} className="flex items-start gap-x-14">
              <p className="text-background-900 text-5xl font-semibold">
                {index + 1 < 10 ? '0' : null}
                {index + 1}
              </p>
              <div className="flex h-full flex-1 flex-col">
                <div className="flex items-center gap-x-2">
                  <img
                    src={item.attributes.img}
                    alt={item.attributes.title}
                    className="size-8 rounded-full bg-cover"
                  />
                  <p>{item.attributes.authors}</p>
                </div>
                <h3 className="py-5 text-2xl font-semibold uppercase max-md:text-xl">
                  {item.attributes.title}
                </h3>
                <div className="mt-auto flex flex-col">
                  <span className="bg-line h-px w-full" />
                  <Link
                    href={item.attributes.slug}
                    className="pt-5 text-base font-normal text-white"
                  >
                    Daha Fazla Oku
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-20 flex justify-center">
          <Button
            variant="skew"
            skewColor="bg-white text-base"
            text="Tümünü Gör"
          />
        </div>
      </div>
    </section>
  )
}
