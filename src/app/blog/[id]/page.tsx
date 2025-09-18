import { Footer } from '@/Components/Footer'
import { Header } from '@/Components/Header'
import { MoreContent } from '@/Components/MoreContent'
import { Trends } from '@/Components/Trends'
import data from '@/data/data.json'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type BlogDetailProps = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const blog = data.find((item) => item._id.toString() === params.id)

  if (!blog) {
    return {
      title: 'Blog bulunamadı',
      description: 'Aradığınız blog mevcut değil.',
    }
  }

  return {
    title: blog.attributes.seo?.metaTitle || blog.attributes.title,
    description: blog.attributes.seo?.metaDescription || blog.attributes.desc,
    alternates: {
      canonical: blog.attributes.seo?.canonicalURL
        ? `/blog/${blog.attributes.seo.canonicalURL}`
        : undefined,
    },
  }
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = data.find((item) => item._id.toString() === params.id)

  if (!blog) {
    return <div className="text-white">Blog bulunamadı</div>
  }
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <Header className="!relative" />
      <div className="container grid grid-cols-12 gap-x-20 pt-16 max-lg:grid-cols-1 max-md:pt-10">
        <div className="col-span-8 pb-20 max-lg:col-span-1">
          <div className="flex items-center gap-x-5 pb-9 text-sm text-white">
            <Link href={'/'} className="uppercase">
              Anasayfa
            </Link>

            <Image
              src="/icon/right-arrow2.svg"
              alt="right-arrow2"
              width="6"
              height="9"
              className="invert filter"
            />

            <Link href={'/blog'} className="uppercase">
              Blog
            </Link>
            <Image
              src="/icon/right-arrow2.svg"
              alt="right-arrow2"
              width="6"
              height="9"
              className="invert filter"
            />
            <p className="uppercase">
              {blog.attributes.title.substring(0, 20)}
            </p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Image src="/icon/eye.svg" alt="eye" width="21" height="16" />

            <p className="text-white">12.094</p>
          </div>
          <div className="flex flex-col gap-y-8 pt-8 pb-16">
            <h2 className="text-6xl font-semibold text-white uppercase max-md:text-4xl">
              {blog.attributes.title}
            </h2>
            <h3 className="text-2xl font-semibold text-white max-md:text-xl">
              {blog.attributes.desc}
            </h3>
            <img src={blog.attributes.img} alt={blog.attributes.title} />
            <p className="text-white max-md:text-sm">
              {blog.attributes.content}
            </p>

            <div className="flex items-center gap-x-3">
              {blog.attributes.tags.map((tag: string, index: number) => (
                <div className="bg-card p-2.5" key={index}>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-8">
              <div className="flex items-center gap-x-2.5">
                <button type="button">
                  <Image
                    src="/icon/heart.svg"
                    alt="heart"
                    width="20"
                    height="18"
                  />
                </button>
                <b>14 Kişi</b> Beğendi
              </div>
              <div className="flex items-center gap-x-2.5">
                <button type="button">
                  <Image
                    src="/icon/comment.svg"
                    alt="comment"
                    width="26"
                    height="24"
                  />
                </button>
                <b>3</b>
              </div>
            </div>
          </div>
          <MoreContent />
          <Trends grid="!grid-cols-2 max-md:!grid-cols-1" count={4} />
        </div>
        <div className="col-span-4 max-lg:col-span-1">
          <Footer variant="mini" />
        </div>
      </div>
    </section>
  )
}
