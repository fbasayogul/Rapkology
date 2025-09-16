"use client"

import { Ads } from "@/Components/Ads"
import { Explore } from "@/Components/Explore"
import { Favori } from "@/Components/Favori"
import { Header } from "@/Components/Header"
import { Hero } from "@/Components/Hero"
import { Trends } from "@/Components/Trends"
import { useState } from "react"

export default function Home() {
  const [list, setList] = useState("list")

  return (
    <main className="bg-[#121212]">
      <Header />
      <Hero />
      <Ads />
      <Trends />
      <Favori />
      <section className="pt-24 w-full flex justify-center pb-40">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-8 lg:gap-x-16">
            <div className="grid col-span-8">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                  <h2 className="text-5xl text-white font-bold"> KEŞFET </h2>
                  <img src="/icon/explore.svg" />
                </div>
                <div className="flex items-center gap-x-5">
                  <button type="button">
                    <img src="/icon/search-bar.svg" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setList("list")
                    }}
                  >
                    <img src="/icon/list.svg" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setList("list-2")
                    }}
                  >
                    <img src="/icon/list-2.svg" />
                  </button>
                </div>
              </div>
              <Explore />
            </div>
            <div className="bg-red-500 h-20 w-full">sad</div>
          </div>
        </div>
      </section>
    </main>
  )
}
