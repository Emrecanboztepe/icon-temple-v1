import image01 from '@/public/images/marquee-img/hero-marquee-01.png'
import image02 from '@/public/images/marquee-img/hero-marquee-02.png'
import image03 from '@/public/images/marquee-img/hero-marquee-03.png'
import image04 from '@/public/images/marquee-img/hero-marquee-04.png'
import image05 from '@/public/images/marquee-img/hero-marquee-05.png'
import image06 from '@/public/images/marquee-img/hero-marquee-06.png'
import image07 from '@/public/images/marquee-img/hero-marquee-07.png'
import image08 from '@/public/images/marquee-img/hero-marquee-08.png'
import image09 from '@/public/images/marquee-img/hero-marquee-09.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WORK_IMAGES = [
  { id: 1, src: image01, alt: 'Client Logo 1' },
  { id: 2, src: image02, alt: 'Client Logo 2' },
  { id: 3, src: image03, alt: 'Client Logo 3' },
  { id: 4, src: image04, alt: 'Client Logo 4' },
  { id: 5, src: image05, alt: 'Client Logo 5' },
  { id: 6, src: image06, alt: 'Client Logo 6' },
  { id: 7, src: image07, alt: 'Client Logo 7' },
  { id: 8, src: image08, alt: 'Client Logo 8' },
  { id: 9, src: image09, alt: 'Client Logo 9' },
]

const OurWork = () => {
  return (
    <section className="overflow-hidden pb-10 pt-10 md:pb-12 md:pt-12 lg:pb-[66px] lg:pt-[66px] xl:pb-[75px] xl:pt-[75px]">
      <div className="container">
        <div className="mb-6 text-center md:mb-15">
          <RevealWrapper className="rv-badge reveal-me mb-4 md:mb-6">
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[578px]">Yaşamın Her Anına Dokunan Estetik Dokunuşlar</h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center gap-3 md:gap-[22px]">
            {[...WORK_IMAGES.slice(0, 5), ...WORK_IMAGES.slice(0, 5), ...WORK_IMAGES.slice(0, 5)].map(({ src, alt, id }, index) => (
              <div key={`${id}-${index}`} className="h-[200px] w-[180px] flex-shrink-0 first:ml-3 sm:h-[250px] sm:w-[220px] md:h-[352px] md:w-[278px] md:first:ml-[22px]">
                <Image src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-3 pt-[22px] md:gap-[22px]">
            {[...WORK_IMAGES.toReversed(), ...WORK_IMAGES.toReversed(), ...WORK_IMAGES.toReversed()].map(({ src, alt, id }, index) => (
              <div key={`${id}-${index}`} className="h-[200px] w-[180px] flex-shrink-0 first:ml-3 sm:h-[250px] sm:w-[220px] md:h-[352px] md:w-[278px] md:first:ml-[22px]">
                <Image src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurWork
