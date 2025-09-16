import Link from "next/link"
import { Button } from "../Button"

interface MenuItem {
  name: string
  link: string
}

export const Header = () => {
  const MenuData: MenuItem[] = [
    {
      name: "HABERLER",
      link: "/haberler",
    },
    {
      name: "ETKİNLİKLER",
      link: "/etkinlikler",
    },
    {
      name: "MÜZİKLER",
      link: "/müzikler",
    },
    {
      name: "VİDEOLAR",
      link: "/videolar",
    },
    {
      name: "İLETİŞİM",
      link: "/iletisim",
    },
  ]

  return (
    <header className="absolute top-0 w-full flex items-center justify-center h-20 bg-[#12121210] border-b border-[#2A2A2A]">
      <div className="container flex items-center px-20">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <img src="/img/logo.svg" alt="Rapkology Logo" />
            <ul className="flex items-cente gap-x-[30px] pl-24">
              {MenuData.map((item, index) => (
                <li key={index} className="uppercase text-sm text-white">
                  <Link href={item.link}> {item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-9">
            <button type="button">
              <img src="/icon/search-bar.svg" alt="Search Bar" />
            </button>
            <Button variant="default" text="GİRİŞ YAP" />
          </div>
        </div>
      </div>
    </header>
  )
}
