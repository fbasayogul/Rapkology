import clsx from 'clsx'
import Link from 'next/link'
import data from '@/data/data.json'

export const ExploreBox = ({
  selectedMenu = '',
  list,
  variant = 'default',
}: {
  variant?: 'default' | 'blog'
  selectedMenu?: string
  list?: string
}) => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes(selectedMenu)
  )

  return (
    <>
      {favori.map((item, index) => (
        <div
          className={clsx(
            list === 'list-2'
              ? 'flex flex-col gap-y-5'
              : variant === 'blog'
                ? 'flex shrink-0 flex-col'
                : 'flex items-start gap-x-5 max-md:flex-col'
          )}
          key={index}
        >
          <div
            className={clsx(
              'flex items-center gap-x-4 pb-6',
              variant != 'blog' ? '!hidden' : null
            )}
          >
            <div
              className="size-8 rounded-xl !bg-cover !bg-center !bg-no-repeat"
              style={{
                background: `url('${item.attributes.img}')`,
              }}
            ></div>
            <p className="text-white">{item.attributes.authors}</p>
          </div>
          <div className="flex flex-col max-md:w-full">
            <div
              className="h-[210px] !bg-cover !bg-center !bg-no-repeat xl:min-w-[300px]"
              style={{
                background: `url('${item.attributes.img}')`,
              }}
            ></div>
            <p
              className={clsx(
                'text-line pt-7 font-light',
                variant === 'blog' ? 'pb-5' : null
              )}
            >
              {new Date(item.createdAt).toLocaleString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col max-md:pt-5">
            <div
              className={clsx(
                'flex items-center gap-x-4 pb-6',
                variant === 'blog' ? '!hidden' : null
              )}
            >
              <div
                className="size-8 rounded-xl !bg-cover !bg-center !bg-no-repeat"
                style={{
                  background: `url('${item.attributes.img}')`,
                }}
              ></div>
              <p className="text-white">{item.attributes.authors}</p>
            </div>
            <p
              className={clsx(
                'text-2xl font-semibold uppercase max-lg:text-xl',
                list === 'list-2' ? 'text-xl' : null,
                variant === 'blog' ? 'flex-1 text-xl' : null
              )}
            >
              {item.attributes.desc.length > 120
                ? item.attributes.desc.substring(0, 120) + '...'
                : item.attributes.desc}
            </p>
            <span className="bg-line mt-6 h-px w-full" />
            <Link
              href={`/blog/${item._id}`}
              className={clsx(
                'mt-auto pt-5 text-base font-normal text-white',
                list === 'list-2' ? '!mt-6' : null
              )}
            >
              Daha Fazla Oku
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
