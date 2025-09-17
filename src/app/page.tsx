'use client'

import { Ads } from '@/Components/Ads'
import { Explore } from '@/Components/Explore'
import { Favori } from '@/Components/Favori'
import { Footer } from '@/Components/Footer'
import { Header } from '@/Components/Header'
import { Hero } from '@/Components/Hero'
import { MenuItem, MenuTabs } from '@/Components/MenuTabs'
import { Trends } from '@/Components/Trends'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<string>(MenuItem[0].name)
  const [list, setList] = useState<'list' | 'list-2'>('list')

  return (
    <main className="bg-dark">
      <Header />
      <Hero />
      <Ads />
      <Trends />
      <Favori />
      <section className="flex w-full justify-center pt-24 pb-40">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-8 max-lg:grid-cols-1 lg:gap-x-16">
            <div className="flex w-full items-center justify-between pb-10 min-lg:hidden">
              <div className="flex items-center gap-x-6">
                <h2 className="text-5xl font-bold text-white max-md:text-4xl">
                  KEŞFET
                </h2>
                <Image
                  src="/icon/explore.svg"
                  alt="explore"
                  width="42"
                  height="42"
                />
              </div>
              <div className="flex items-center gap-x-5 max-md:hidden">
                <button type="button">
                  <Image
                    src="/icon/search-bar.svg"
                    alt="search-bar"
                    width="24"
                    height="22"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setList('list')
                  }}
                >
                  <Image
                    src="/icon/list.svg"
                    alt="list"
                    width="25"
                    height="20"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setList('list-2')
                  }}
                >
                  <Image
                    src="/icon/list-2.svg"
                    alt="list"
                    width="25"
                    height="20"
                  />
                </button>
              </div>
            </div>
            <div className="col-span-8 grid max-lg:order-2 max-lg:col-span-1">
              <div className="flex w-full items-center justify-between max-lg:hidden">
                <div className="flex items-center gap-x-6">
                  <h2 className="text-5xl font-bold text-white max-md:text-4xl">
                    KEŞFET
                  </h2>
                  <Image
                    src="/icon/explore.svg"
                    alt="explore"
                    width="42"
                    height="42"
                  />
                </div>
                <div className="flex items-center gap-x-5">
                  <button type="button">
                    <Image
                      src="/icon/search-bar.svg"
                      alt="search-bar"
                      width="24"
                      height="22"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setList('list')
                    }}
                  >
                    <Image
                      src="/icon/list.svg"
                      alt="list"
                      width="25"
                      height="20"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setList('list-2')
                    }}
                  >
                    <Image
                      src="/icon/list-2.svg"
                      alt="list"
                      width="25"
                      height="20"
                    />
                  </button>
                </div>
              </div>
              <Explore list={list} selectedMenu={selectedMenu} />
            </div>
            <div className="col-span-4 grid w-full gap-y-[200px] max-lg:order-1 max-lg:col-span-1 lg:h-fit">
              <MenuTabs
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
              <Footer variant="mini" className="max-lg:hidden" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
