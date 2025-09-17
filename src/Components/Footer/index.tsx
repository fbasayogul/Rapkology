import clsx from 'clsx'
import Link from 'next/link'
import { MenuData } from '../Header'
import Image from 'next/image'

type FooterProps = {
  variant?: 'default' | 'mini'
  className?: string
}

type SocialMediaProps = {
  img: string
  link: string
  width: number
  height: number
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  className,
}) => {
  const SocialMedia: SocialMediaProps[] = [
    {
      img: 'facebook',
      link: '/',
      width: 13,
      height: 23,
    },
    {
      img: 'x',
      link: '/',
      width: 21,
      height: 17,
    },
    {
      img: 'discord',
      link: '/',
      width: 25,
      height: 19,
    },
    {
      img: 'spotify',
      link: '/',
      width: 26,
      height: 27,
    },
    {
      img: 'youtube',
      link: '/',
      width: 27,
      height: 19,
    },
  ]
  return (
    <footer
      className={clsx(
        'flex w-full justify-center pt-20 pb-14',
        className,
        variant === 'mini' ? '!py-0' : null
      )}
    >
      <div
        className={clsx(
          'container grid max-lg:gap-y-10',
          variant === 'mini' ? 'grid-cols-1' : 'grid-cols-2',
          className
        )}
      >
        <div className="flex flex-col gap-y-12">
          <Link
            href={'/'}
            className={clsx(variant === 'mini' ? 'hidden' : null)}
          >
            <img
              src="/img/logo.svg"
              className="max-w-[250px]"
              alt="rapkology-logo"
            />
          </Link>
          <span
            className={clsx(
              'text-2xl font-semibold text-white max-lg:text-xl',
              variant === 'mini' ? 'text-4xl' : ''
            )}
          >
            GELİŞMELERDEN İLK SEN HABERDAR OL!
          </span>
          <div className="border-line flex w-[80%] items-center gap-x-2 border-b">
            <input
              type="text"
              className="w-full bg-transparent pb-5 pl-3 outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-white"
              placeholder="EMAIL"
            />
            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center gap-x-3 pr-1 pb-5"
            >
              <span className="text-primary text-sm font-semibold">GÖNDER</span>
              <Image
                src="/icon/right-arrow.svg"
                alt="right-arrow"
                width="12"
                height="13"
              />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            'flex w-full justify-end max-lg:justify-start',
            variant === 'mini' ? 'justify-start' : null
          )}
        >
          <div className="flex flex-col items-start justify-end gap-y-8">
            <div
              className={clsx(
                'flex items-center gap-x-5',
                variant === 'mini' ? 'pt-12 pb-10' : null
              )}
            >
              {SocialMedia.map((icon, index) => (
                <Link href={icon.link} key={index}>
                  <Image
                    src={`/icon/${icon.img}.svg`}
                    alt={icon.img}
                    width={icon.width}
                    height={icon.height}
                  />
                </Link>
              ))}
            </div>
            <ul
              className={clsx(
                'flex items-center gap-x-[40px] max-md:flex-wrap max-md:gap-y-5',
                variant === 'mini' ? 'grid grid-cols-3 gap-y-6' : null
              )}
            >
              {MenuData.map((menu, index) => (
                <li className="text-sm text-white uppercase" key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
            <span className="text-text-light text-sm font-light">
              © RAPKOLOGY All Rights Are Reserved 2022.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
