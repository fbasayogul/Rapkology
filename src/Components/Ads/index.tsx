import { Button } from '../Button'

export const Ads = () => {
  return (
    <div className="relative z-50 flex h-full w-full justify-center max-xl:pb-10">
      <div
        className="container flex w-full items-center justify-between max-lg:pt-52"
        style={{
          backgroundImage: "url('/img/twitch-background.svg')",
        }}
      >
        <img src="/img/twitch-x.svg" className="max-md:w-1/2" />
        <div className="flex -rotate-3 flex-col items-center gap-y-3 max-xl:-mt-14 max-lg:absolute max-lg:top-20 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:gap-y-2.5 max-md:w-[95%]">
          <div className="flex items-center max-xl:flex-col max-lg:flex-row">
            <img
              src="/img/twitch-logo.svg"
              className="max-md:w-1/2 max-sm:w-[40%]"
            />
            <div className="mr-4 w-px self-stretch bg-[#3B3B3B] py-3 max-xl:hidden max-lg:block"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-6xl font-light text-white max-lg:text-5xl max-sm:text-4xl">
                HER HAFTA
              </p>
              <p className="text-6xl font-bold text-[#F0E74D] max-lg:text-5xl max-sm:text-4xl">
                CANLIDAYIZ
              </p>
              <p className="text-base font-medium text-white max-xl:text-end max-lg:text-start">
                Bizi Takip Edin
              </p>
            </div>
          </div>
          <div className="flex w-fit items-center gap-x-2.5 rounded-lg border border-[#2A2A2A] p-4 max-md:p-2.5">
            <Button
              variant="twitch"
              className="!bg-[#864CF6] font-medium text-white max-md:text-xs"
              text="Takip Et"
              icon="heart"
            />
            <Button
              variant="twitch"
              className="!bg-[#222123] font-medium text-white max-md:text-xs"
              text="Abone Ol"
              icon="star"
              arrowIcon
            />
          </div>
        </div>
        <img src="/img/twitch-y.svg" className="max-md:w-[40%]" />
      </div>
      <div
        className="absolute -bottom-5 z-10 flex h-[200px] w-full justify-start bg-repeat-x max-lg:bottom-0"
        style={{ backgroundImage: "url('/img/black.svg')" }}
      ></div>
    </div>
  )
}
