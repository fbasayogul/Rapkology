import data from "@/data/data.json"

export const Favori = () => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes("Ayın Videoları")
  )

  return (
    <section className="w-full pt-20 flex justify-center">
      <div className="container flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="bg-white flex items-center gap-x-8 w-fit pl-24 pr-36 py-9 rounded-br-full">
            <img src="/icon/youtube-logo.svg" />
            <img src="/icon/spotify-logo.svg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-5xl font-semibold">Ayın Favorileri</h2>
          <ul className="flex items-center w-1/2 overflow-x-scroll overflow-y-hidden gap-x-12">
            {favori.map((item, index) => (
              <li key={index} className="relative">
                <div className="bg-[#2A2A2A] relative h-[264px] shrink-0 w-[274px] overflow-hidden flex items-center">
                  <div
                    className="!bg-cover !bg-center !bg-no-repeat w-[184px] h-[184px] -rotate-12 shrink-0 -ml-32"
                    style={{ background: `url('${item.attributes.img}')` }}
                  ></div>
                  <div className="flex flex-1 items-center flex-col">
                    <p className="bg-[#323232] py-1.5 px-2.5 rounded-2xl">
                      Top 10 <b>({index + 1}. Sıra)</b>
                    </p>
                    <p className="text-center px-4">{item.attributes.title}</p>
                  </div>
                </div>
                <div
                  className="flex justify-start absolute -bottom-1 h-7 w-full bg-repeat-x z-10 rotate-2"
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
