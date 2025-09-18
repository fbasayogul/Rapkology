import data from '@/data/data.json'
import { ClipsBox } from '../ClipsBox'
import Image from 'next/image'

export const Clips = () => {
  const trend = data.filter((item) => item.attributes?.trends === false)

  return (
    <section className="flex items-center justify-center">
      <div className="container">
        <div className="flex items-center gap-x-6">
          <h2 className="text-5xl font-bold text-white max-md:text-4xl">
            KLİPLER
          </h2>
          <Image src="/icon/video.svg" alt="video" width="49" height="29" />
        </div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-10 pt-20 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {trend.map((item, index) => (
            <ClipsBox
              key={index}
              background={item.attributes.img}
              title={item.attributes.title}
              link={`/blog/${item._id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
