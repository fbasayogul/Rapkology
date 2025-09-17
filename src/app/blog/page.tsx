'use client'

import { BlogHero } from '@/Components/BlogHero'
import { Button } from '@/Components/Button'
import { Clips } from '@/Components/Clips'
import { ExploreBox } from '@/Components/ExploreBox'
import { Footer } from '@/Components/Footer'
import { Header } from '@/Components/Header'
import { MenuItem, MenuTabs } from '@/Components/MenuTabs'
import Image from 'next/image'
import { useState } from 'react'

export default function Blog() {
  const [selectedMenu, setSelectedMenu] = useState(MenuItem[0].name)
  const [list, setList] = useState('list')

  return (
    <main className="bg-dark">
      <Header className="!bg-dark !relative !border-0" />
      <BlogHero />
      <section
        className="flex w-full flex-col items-center justify-center bg-no-repeat pb-20"
        style={{
          background: 'url("/img/diamond.svg")',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="-mt-40 h-[200px] w-full"
          style={{ backgroundImage: "url('/img/black.svg')" }}
        ></div>
        <div className="container">
          <div className="flex w-full items-center justify-between pb-14">
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
            <div className="flex items-center gap-x-5 max-lg:hidden">
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
                <Image src="/icon/list.svg" alt="list" width="25" height="20" />
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
          <MenuTabs
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            title={false}
          />
          <div className="grid grid-cols-4 gap-x-5 gap-y-14 pt-20 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ExploreBox
              selectedMenu={selectedMenu}
              list={list}
              variant="blog"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Button
            variant="skew"
            skewColor="bg-white"
            text="Daha Fazla Gör"
            className="mt-10"
          />
        </div>
      </section>
      <Clips />
      <Footer className="max-lg:grid-cols-1" />
    </main>
  )
}
