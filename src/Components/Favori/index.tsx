import data from '@/data/data.json'

export const Favori = () => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes('Ayın Videoları')
  )

  return (
    <section className="flex w-full justify-center pt-20">
      <div className="container flex flex-col items-center justify-center max-md:!pl-0">
        <div className="w-full">
          <div className="flex w-fit items-center gap-x-8 rounded-br-full bg-white py-9 pr-36 pl-24 max-md:py-5 max-md:pr-12 max-md:pl-12">
            <img
              src="/icon/youtube-logo.svg"
              className="max-md:w-[60%] max-sm:w-[45%]"
              alt="youtube-logo"
            />
            <img
              src="/icon/spotify-logo.svg"
              className="max-md:w-[60%] max-sm:w-[45%]"
              alt="spotify-logo"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between max-md:flex-col">
          <h2 className="text-5xl font-semibold max-md:py-10 max-md:text-center max-md:text-4xl">
            Ayın <br className="min-md:hidden" />
            Favorileri
          </h2>
          <ul className="[&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:bg-background-900 grid auto-cols-[274px] grid-flow-col gap-x-12 overflow-x-scroll overflow-y-hidden pb-10 max-md:w-2/3 md:flex md:w-1/2 md:items-center md:gap-x-12 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
            {favori.map((item, index) => (
              <li key={index} className="relative">
                <div className="bg-background-900 relative flex w-[274px] shrink-0 items-center overflow-hidden max-md:flex max-md:h-full max-md:flex-col max-md:py-10 md:h-[264px]">
                  <div
                    className="h-[184px] w-[184px] shrink-0 -rotate-12 !bg-cover !bg-center !bg-no-repeat md:-ml-32"
                    style={{ background: `url('${item.attributes.img}')` }}
                  ></div>
                  <div className="flex flex-1 flex-col items-center max-md:pt-10 md:gap-y-5">
                    <p className="bg-card rounded-2xl px-2.5 py-1.5">
                      Top 10 <b>({index + 1}. Sıra)</b>
                    </p>
                    <p className="px-4 text-center">{item.attributes.title}</p>
                  </div>
                </div>
                <div
                  className="absolute -bottom-1 z-10 flex h-7 w-full rotate-2 justify-start bg-repeat-x"
                  style={{ backgroundImage: "url('/img/yellow.svg')" }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
