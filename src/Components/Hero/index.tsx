"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Button } from "../Button"
import clsx from "clsx"
import Link from "next/link"

type SwiperProps = {
  name: string
  title: string
  content: string
  link: string
  theme: string
}

export const Hero = () => {
  const SwiperData: SwiperProps[] = [
    // {
    //   name: "Swiper-1",
    //   title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ.",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    //   link: "/",
    //   theme: "light",
    // },
    {
      name: "hip-hop-singer",
      title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      link: "/",
      theme: "dark",
    },
  ]

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="max-h-[800px] max-2xl:max-h-[700px] max-xl:max-h-[650px]"
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
              className="w-full"
              alt={`${swiper.name}`}
            />
            <div className="absolute w-full h-full max-h-[800px] max-2xl:max-h-[700px] max-xl:max-h-[650px] top-0 left-0">
              <div className="w-full flex items-center justify-center h-full">
                <div className="container flex justify-end w-full items-center h-full relative z-50">
                  <div
                    className={clsx(
                      "flex flex-col items-start justify-center h-full max-w-[666px] max-xl:max-w-[500px] text-start",
                      swiper.theme === "light" ? "text-[#121212]" : "text-white"
                    )}
                  >
                    <h1 className="w-full text-start font-bold text-6xl max-xl:text-5xl leading-[80px] max-xl:leading-14">
                      {swiper.title}
                    </h1>
                    <h3 className="w-full text-start text-base font-normal text-xl:text-sm pt-6 pb-8">
                      {swiper.content}
                    </h3>
                    <Link href={swiper.link}>
                      <Button
                        variant="skew"
                        text="Devamını Oku"
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="flex justify-start absolute -bottom-5 h-[200px] w-full bg-repeat-x z-10"
        style={{ backgroundImage: "url('/img/black.svg')" }}
      ></div>
    </div>
  )
}
