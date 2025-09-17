import Link from 'next/link'

export const ClipsBox = ({
  background,
  title,
  link,
}: {
  background: string
  title: string
  link: string
}) => {
  return (
    <div className="flex flex-col gap-y-8">
      <Link
        href={link}
        className="flex min-h-[240px] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img src="/icon/play-icon.svg" />
      </Link>
      <p className="text-xl font-semibold uppercase">{title}</p>
    </div>
  )
}
