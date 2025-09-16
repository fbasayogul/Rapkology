import clsx from 'clsx'
import Link from 'next/link'
import { MenuData } from '../Header'

type FooterProps = {
  variant?: 'default' | 'mini'
  className?: string
}

type SocialMediaProps = {
  img: string
  link: string
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  className,
}) => {
  const SocialMedia: SocialMediaProps[] = [
    {
      img: 'facebook',
      link: '/',
    },
    {
      img: 'x',
      link: '/',
    },
    {
      img: 'discord',
      link: '/',
    },
    {
      img: 'spotify',
      link: '/',
    },
    {
      img: 'youtube',
      link: '/',
    },
  ]
  return (
    <footer className={clsx('flex w-full justify-center', className)}>
      <div
        className={clsx(
          'container grid',
          variant === 'mini' ? 'grid-cols-1' : 'grid-cols-2'
        )}
      >
        <div className="flex flex-col gap-y-12">
          <Link
            href={'/'}
            className={clsx(variant === 'mini' ? 'hidden' : null)}
          >
            <img src="/img/logo.svg" className="max-w-[250px]" />
          </Link>
          <span
            className={clsx(
              'text-2xl font-semibold text-white',
              variant === 'mini' ? 'text-4xl' : ''
            )}
          >
            GELİŞMELERDEN İLK SEN HABERDAR OL!
          </span>
          <div className="flex w-[80%] items-center gap-x-2 border-b border-[#3B3B3B]">
            <input
              type="text"
              className="w-full bg-transparent pb-5 pl-3 outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-white"
              placeholder="EMAIL"
            />
            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center gap-x-3 pr-1 pb-5"
            >
              <span className="text-sm font-semibold text-[#F0E74D]">
                GÖNDER
              </span>
              <img src="/icon/right-arrow.svg" />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            'flex w-full justify-end',
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
                  <img src={`/icon/${icon.img}.svg`} alt={icon.img} />
                </Link>
              ))}
            </div>
            <ul
              className={clsx(
                'flex items-center gap-x-[40px]',
                variant === 'mini' ? 'grid grid-cols-3 gap-y-6' : null
              )}
            >
              {MenuData.map((menu, index) => (
                <li className="text-sm text-white uppercase" key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
            <span className="text-sm font-light text-[#5C5C5C]">
              © RAPKOLOGY All Rights Are Reserved 2022.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
