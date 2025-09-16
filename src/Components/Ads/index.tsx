import { Button } from "../Button"

export const Ads = () => {
  return (
    <div className="w-full h-full flex justify-center relative">
      <div
        className="container flex items-center justify-between w-full"
        style={{
          backgroundImage: "url('/img/twitch-background.svg')",
        }}
      >
        <img src="/img/twitch-x.svg" />
        <div className="flex flex-col gap-y-3 items-center -rotate-3">
          <div className="flex items-center">
            <img src="/img/twitch-logo.svg" />
            <div className="w-px self-stretch bg-[#3B3B3B] mr-4 py-3"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-white text-6xl font-light">HER HAFTA</p>
              <p className="font-bold text-6xl text-[#F0E74D]">CANLIDAYIZ</p>
              <p className="text-base font-medium text-white">
                Bizi Takip Edin
              </p>
            </div>
          </div>
          <div className="border border-[#2A2A2A] rounded-lg p-4 gap-x-2.5 w-fit flex items-center">
            <Button
              variant="twitch"
              className="!bg-[#864CF6] text-white font-medium"
              text="Takip Et"
              icon="heart"
            />
            <Button
              variant="twitch"
              className="!bg-[#222123] text-white font-medium"
              text="Abone Ol"
              icon="star"
              arrowIcon
            />
          </div>
        </div>
        <img src="/img/twitch-y.svg" />
      </div>
      <div
        className="flex justify-start absolute -bottom-5 h-[200px] w-full bg-repeat-x z-10"
        style={{ backgroundImage: "url('/img/black.svg')" }}
      ></div>
    </div>
  )
}
