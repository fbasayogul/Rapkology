'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Button } from '../Button'
import clsx from 'clsx'
import Link from 'next/link'

type SwiperProps = {
  name: string
  title: string
  content: string
  link: string
  theme: string
}

export const Hero = () => {
  const SwiperData: SwiperProps[] = [
    {
      name: 'Swiper-1',
      title: 'DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      link: '/',
      theme: 'light',
    },
    {
      name: 'hip-hop-singer',
      title: 'TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      link: '/',
      theme: 'dark',
    },
  ]

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        color="white"
        className="max-h-[800px] max-2xl:max-h-[700px] max-xl:max-h-[650px] max-md:!hidden"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {SwiperData.map((swiper, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/img/${swiper.name}.png`}
              className="w-full bg-cover max-md:pt-[250px]"
              alt={`${swiper.name}`}
            />
            <div className="absolute top-0 left-0 h-full max-h-[800px] w-full max-2xl:max-h-[700px] max-xl:max-h-[650px] max-md:h-[100dvh]">
              <div className="flex h-full w-full items-center justify-center">
                <div className="relative z-50 container flex h-full w-full items-center justify-end max-lg:justify-center">
                  <div
                    className={clsx(
                      'flex h-full max-w-[666px] flex-col items-start justify-center text-start max-xl:max-w-[500px] max-lg:justify-start max-md:max-w-[334px]',
                      swiper.theme === 'light' ? 'text-dark' : 'text-white'
                    )}
                  >
                    <h1 className="w-full text-start text-6xl leading-[80px] font-bold max-xl:text-5xl max-xl:leading-14 max-lg:text-center max-lg:text-4xl max-md:text-3xl max-md:leading-10 max-md:font-semibold">
                      {swiper.title}
                    </h1>
                    <h3 className="text-xl:text-sm w-full pt-6 pb-8 text-start text-base font-normal max-lg:text-center max-md:pb-5 max-md:font-light">
                      {swiper.content}
                    </h3>
                    <Link
                      href={swiper.link}
                      className="max-lg:flex max-lg:w-full max-lg:justify-center"
                    >
                      <Button variant="skew" text="Devamını Oku" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col overflow-hidden min-md:hidden">
        <div className="flex h-auto w-auto items-center justify-center">
          <div className="relative z-50 container flex h-auto w-full items-center justify-center">
            <div
              className={clsx(
                'flex h-full max-w-[334px] flex-col items-start justify-start pt-10 text-start'
              )}
            >
              <h1 className="w-full text-start leading-10 font-semibold max-lg:text-center max-lg:text-4xl max-md:text-[30px]">
                TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
              </h1>
              <h3 className="text-xl:text-sm w-full pt-6 pb-8 text-start text-base font-normal max-lg:text-center max-md:pb-5 max-md:font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </h3>
              <Link
                href={'/'}
                className="max-lg:flex max-lg:w-full max-lg:justify-center"
              >
                <Button variant="skew" text="Devamını Oku" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/img/hip-hop-singer.png"
          className="w-full scale-200 object-cover object-center pt-5"
          alt="hip-hop-singer"
        />
        <div
          className="z-10 flex h-[200px] w-full justify-start bg-repeat-x min-md:hidden"
          style={{ backgroundImage: "url('/img/black.svg')" }}
        ></div>
      </div>
      <div
        className="absolute -bottom-5 z-10 flex h-[200px] w-full justify-start bg-repeat-x max-md:hidden"
        style={{ backgroundImage: "url('/img/black.svg')" }}
      ></div>
    </section>
  )
}
