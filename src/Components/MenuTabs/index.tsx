import clsx from 'clsx'

type MenuItemProps = {
  name: string
  id: string
}

export const MenuTabs = ({
  selectedMenu,
  setSelectedMenu,
  title = true,
}: {
  title?: boolean
  selectedMenu: string
  setSelectedMenu: (value: string) => void
}) => {
  return (
    <nav className="h-fit">
      <h2
        className={clsx(
          title
            ? 'pb-6 text-4xl font-semibold text-white max-md:text-3xl'
            : 'hidden'
        )}
      >
        NE GÖRMEK İSTERSİN?
      </h2>
      <ul className="flex w-full items-center gap-2.5 [-ms-overflow-style:none] [scrollbar-width:none] max-md:max-w-[calc(100vw-100px)] max-md:overflow-x-scroll max-md:whitespace-nowrap max-sm:max-w-[calc(100vw-60px)] md:flex-wrap">
        {MenuItem.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setSelectedMenu(item.id)
            }}
            className={clsx(
              'border px-5',
              selectedMenu === item.id
                ? 'bg-primary text-dark border-transparent py-2'
                : 'border-white py-2.5 text-white'
            )}
          >
            {item.name}
          </button>
        ))}
      </ul>
    </nav>
  )
}

export const MenuItem: MenuItemProps[] = [
  {
    name: 'Türk Rap',
    id: 'Türk Rap',
  },
  {
    name: 'Yabancı Rap',
    id: 'Yabancı Rap',
  },
  {
    name: 'Rap Haberleri',
    id: 'Rap Haberleri',
  },
  {
    name: 'Haftanın Klipleri',
    id: 'Haftanın Videoları',
  },
  {
    name: 'Ayın Klipleri',
    id: 'Ayın Videoları',
  },
  {
    name: 'Rap Sohbetleri',
    id: 'Rap Sohbetleri',
  },
  {
    name: 'Rap Müsabakaları',
    id: 'Rap Müsabakaları',
  },
]
