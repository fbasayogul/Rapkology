import data from '@/data/data.json'
import clsx from 'clsx'
import { ExploreBox } from '../ExploreBox'

type Props = {
  list?: string
  selectedMenu?: string | undefined
  className?: string
}

export const Explore: React.FC<Props> = ({
  list,
  selectedMenu = '',
  className,
}) => {
  const favori = data.filter((item) =>
    item.attributes?.tags?.includes(selectedMenu)
  )

  return (
    <>
      <div
        className={clsx(
          'min-h-dvh pt-24 max-lg:pt-12',
          list === 'list-2'
            ? 'grid grid-cols-2 gap-x-8 gap-y-14'
            : 'flex flex-col gap-y-20 max-md:gap-y-14',
          className
        )}
      >
        {favori.length > 0 ? (
          <ExploreBox selectedMenu={selectedMenu} list={list} />
        ) : (
          <div className="text-2xl text-white"> İçerik Bulunamadı </div>
        )}
      </div>
    </>
  )
}
