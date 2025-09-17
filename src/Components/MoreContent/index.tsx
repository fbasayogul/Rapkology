import data from '@/data/data.json'
export const MoreContent = () => {
  const trend = data.filter((item) => item.attributes?.trends === false)

  return (
    <section className="flex w-full flex-col justify-center">
      <h2 className="pb-16 text-6xl font-semibold max-md:pb-8 max-md:text-4xl">
        DAHA FAZLA İÇERİK
      </h2>
      <div className="flex flex-col gap-y-7 *:border-b *:border-[#3B3B3B]">
        {trend.slice(0, 3).map((item, index) => (
          <div
            className="flex items-center gap-x-5 pb-7 last:border-0"
            key={index}
          >
            <img src={`${item.attributes.img}`} className="max-w-24" />
            <span className="text-2xl font-semibold text-white max-md:text-lg max-md:font-medium">
              {item.attributes.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
