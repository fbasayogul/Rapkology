import data from "@/data/data.json"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"

type Props = {
  list?: string
  setList?: string
}

export const Explore: React.FC<Props> = ({ list, setList }) => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes("Ayın Videoları")
  )

  return (
    <>
      <div
        className={clsx(
          list === "list-2"
            ? "grid grid-cols-2 gap-x-8 gap-y-14 pt-24"
            : "flex flex-col pt-24 gap-y-20"
        )}
      >
        {favori.map((item, index) => (
          <div
            className={clsx(
              list === "list-2"
                ? "flex flex-col gap-y-5"
                : "flex items-start gap-x-5"
            )}
            key={index}
          >
            <div className="flex flex-col">
              <div
                className="min-w-[300px] h-[210px] !bg-cover !bg-center !bg-no-repeat"
                style={{
                  background: `url('${item.attributes.img}')`,
                }}
              ></div>
              <p className="text-[#3B3B3B] font-light pt-7">
                {new Date(item.createdAt).toLocaleString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex flex-col flex-1 h-full">
              <div className="flex items-center gap-x-4 pb-6">
                <div
                  className="size-8 !bg-cover !bg-center !bg-no-repeat rounded-xl"
                  style={{
                    background: `url('${item.attributes.img}')`,
                  }}
                ></div>
                <p className="text-white">{item.attributes.authors}</p>
              </div>
              <p
                className={clsx(
                  "uppercase text-2xl font-semibold",
                  list === "list-2" ? "text-xl" : null
                )}
              >
                {item.attributes.desc.length > 150
                  ? item.attributes.desc.substring(0, 150) + "..."
                  : item.attributes.desc}
              </p>
              <span className="w-full h-px bg-[#3B3B3B] mt-6" />
              <Link
                href={item.attributes.slug}
                className={clsx(
                  "text-white mt-auto text-base font-normal",
                  list === "list-2" ? "!mt-6" : null
                )}
              >
                Daha Fazla Oku
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
