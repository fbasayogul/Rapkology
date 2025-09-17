'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import data from '@/data/data.json'

export const BlogHero = () => {
  const trend = data.filter((item) => item.attributes?.trends === false)
  console.log(trend)

  return (
    <section className="w-full">
      <div
        className="flex w-full justify-center bg-[#F0E74D] bg-contain bg-repeat pb-40"
        style={{
          backgroundImage:
            'url("/img/metal-texture.png"), url("/img/style.png")',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundSize: 'auto, 60%',
          backgroundPosition: 'center, right',
        }}
      >
        <div className="container pt-16">
          <div className="flex items-center gap-x-5 pb-9 text-sm text-[#121212] max-md:hidden">
            <p className="uppercase">Anasayfa</p>
            <img src="/icon/right-arrow2.svg" className="text-[#121212]" />
            <p className="uppercase">Blog</p>
            <img src="/icon/right-arrow2.svg" className="text-[#121212]" />
            <p className="uppercase">LOREM IPSUM DOLOR ... AMET</p>
          </div>
          <h2 className="pb-6 text-6xl font-semibold text-[#121212] max-md:hidden">
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
                  pagination={{
                    clickable: true,
                    el: '.deneme',
                  }}
                  loop
                >
                  {trend.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col">
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
                            <img src="/icon/play.svg" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="mt-4 text-2xl font-bold text-[#121212] uppercase">
                            {item.attributes.title}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-y-6 max-xl:col-span-1 max-xl:grid max-xl:grid-cols-4 max-xl:gap-x-5 max-xl:pt-14 max-md:flex max-md:flex-col max-md:pt-5">
              {trend.slice(0, 4).map((item, index) => (
                <div
                  className="flex items-center gap-x-5 gap-y-5 max-xl:flex-col max-xl:items-start max-md:flex-row"
                  key={index}
                >
                  <img
                    src={item.attributes.img}
                    className="max-w-[230px] max-2xl:max-w-[200px] max-xl:max-w-full max-md:max-w-[185px]"
                    alt={item.attributes.title}
                  />
                  <p className="max-md:xl text-2xl font-semibold text-[#121212] uppercase max-2xl:text-xl max-xl:text-lg max-sm:text-base max-sm:font-medium">
                    {item.attributes.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
