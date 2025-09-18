'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import data from '@/data/data.json'
import Image from 'next/image'
import Link from 'next/link'

export const BlogHero = () => {
  const trend = data.filter((item) => item.attributes?.trends === false)

  return (
    <section className="w-full">
      <div
        className="bg-primary flex w-full justify-center bg-contain bg-repeat pb-40"
        style={{
          backgroundImage:
            'url("/img/metal-texture.png"), url("/img/style.png")',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundSize: 'auto, 60%',
          backgroundPosition: 'center, right',
        }}
      >
        <div className="container pt-16 max-md:pt-10">
          <div className="text-dark flex items-center gap-x-5 pb-9 text-sm max-md:hidden">
            <Link href={'/'} className="uppercase">
              Anasayfa
            </Link>
            <Image
              src="/icon/right-arrow2.svg"
              alt="right-arrow2"
              width="6"
              height="9"
            />
            <Link href={'/blog'} className="uppercase">
              Blog
            </Link>
          </div>
          <h2 className="text-dark pb-6 text-6xl font-semibold max-md:hidden">
            BLOG
          </h2>

          <div className="grid grid-cols-12 gap-x-5 max-xl:grid-cols-1">
            <div className="col-span-8 flex flex-col max-xl:col-span-1">
              <div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{ delay: 5000 }}
                  loop
                >
                  {trend.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={`/blog/${item._id}`}
                        className="flex flex-col"
                      >
                        <div className="relative">
                          <img
                            src={item.attributes.img}
                            className="w-full bg-cover"
                            alt={item.attributes.title}
                          />
                          <div className="absolute right-14 bottom-14 left-14 flex items-center justify-between">
                            <p className="text-4xl font-semibold text-white uppercase">
                              {item.attributes.title.substring(0, 15)}
                            </p>
                            <Image
                              src="/icon/play.svg"
                              alt="play"
                              width="65"
                              height="65"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-dark mt-4 text-2xl font-bold uppercase">
                            {item.attributes.title}
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-y-6 max-xl:col-span-1 max-xl:grid max-xl:grid-cols-4 max-xl:gap-x-5 max-xl:pt-14 max-md:flex max-md:flex-col max-md:pt-5">
              {trend.slice(0, 4).map((item, index) => (
                <Link
                  href={`/blog/${item._id}`}
                  className="flex items-center gap-x-5 gap-y-5 max-xl:flex-col max-xl:items-start max-md:flex-row"
                  key={index}
                >
                  <img
                    src={item.attributes.img}
                    className="max-w-[230px] max-2xl:max-w-[200px] max-xl:max-w-full max-md:max-w-[185px]"
                    alt={item.attributes.title}
                  />
                  <p className="max-md:xl text-dark text-2xl font-semibold uppercase max-2xl:text-xl max-xl:text-lg max-sm:text-base max-sm:font-medium">
                    {item.attributes.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
