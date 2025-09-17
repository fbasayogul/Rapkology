import Image from 'next/image'
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
        <Image
          src="/icon/play-icon.svg"
          alt="play-icon"
          width="72"
          height="72"
        />
      </Link>
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
    </div>
  )
}
