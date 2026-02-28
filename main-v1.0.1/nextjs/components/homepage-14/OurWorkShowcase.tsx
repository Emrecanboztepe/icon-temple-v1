import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const ourWork: WorkType[] = getMarkDownData('data/flim-making/project')

const daireler = [
  {
    id: 1,
    title: '1+1 Daireler',
    slug: '/icon-temple-residence-1-1-daire',
  },
  {
    id: 2,
    title: '2+1 Daireler',
    slug: '/icon-temple-residence-2-1-daire',
  },
  {
    id: 3,
    title: '3+1 Daireler',
    slug: '/icon-temple-residence-3-1-daire',
  },
]

const OurWorkShowcase = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge mb-3">
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Geleceği  <br />
             İnşa Eden
              <i className="font-instrument">  İlham Veren Yapılar</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Modern mimari ve üstün mühendislikle hayata geçirdiğimiz referans projelerimiz.</p>
          </TextAppearAnimation>
        </div>
        
        <div className="mb-[60px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ourWork.slice(0, 3).map((item, index) => (
            <div key={item.slug} className="group">
              <Link href={daireler[index].slug}>
                <figure className="mb-6 overflow-hidden">
                  <img
                    src={item?.image}
                    className="h-auto w-full transition-all duration-500 group-hover:scale-110"
                    alt={daireler[index].title}
                  />
                </figure>
              </Link>
              <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                {item?.date}, {item?.year}
              </p>
              <Link href={daireler[index].slug}>
                <h3 className="text-2xl font-normal md:text-3xl lg:text-4xl">
                  {daireler[index].title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWorkShowcase
