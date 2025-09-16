"use client"

import data from "@/data/data.json"
import Link from "next/link"
import { Button } from "../Button"

export const Trends = () => {
  const trend = data.filter((item) => item.attributes?.trends === false)

  return (
    <section className="mt-10 w-full flex justify-center">
      <div className="container">
        <div className="flex items-center gap-x-6">
          <h2 className="text-5xl text-white font-bold"> TRENDLER </h2>
          <img src="/icon/trend.svg" />
        </div>
        <ul className="grid grid-cols-3 mt-20 gap-x-5 gap-y-12">
          {trend.map((item, index) => (
            <li key={index} className="flex items-start gap-x-14">
              <p className="text-[#2A2A2A] text-5xl font-semibold">
                {index + 1 < 10 ? "0" : null}
                {index + 1}
              </p>
              <div className="flex flex-col h-full flex-1">
                <div className="flex items-center gap-x-2">
                  <img
                    src={item.attributes.img}
                    className="size-8 rounded-full bg-cover"
                  />
                  <p>{item.attributes.authors}</p>
                </div>
                <h3 className="py-5 font-semibold text-2xl uppercase">
                  {item.attributes.title}
                </h3>
                <div className="mt-auto flex flex-col">
                  <span className="w-full h-px bg-[#3B3B3B]" />
                  <Link
                    href={item.attributes.slug}
                    className="text-white pt-5 text-base font-normal"
                  >
                    Daha Fazla Oku
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-20">
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
