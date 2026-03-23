import hero01 from '@/public/images/hero-img/hero-img-01.png'
import hero02 from '@/public/images/hero-img/hero-img-02.png'
import hero03 from '@/public/images/hero-img/hero-img-03.png'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import RevealWrapperV2 from '../animation/RevealWrapperV2'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const HeroV9 = () => {
  return (
    <section className="pb-14 pt-[110px] md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-[190px] xl:pb-[100px]">
      <div className="mx-auto max-w-screen-xl px-3 max-lg:px-5">
        <div className="flex flex-col gap-8 max-lg:justify-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 max-lg:self-center">
            <TextAppearAnimation>
              <h1 className="text-appear mb-10 text-center lg:mb-16 lg:text-left xl:mb-24 xl:text-[85px] xl:leading-[1.22]">
                Ege'nin Kalbi<i className="block font-instrument italic">Altınkum'un</i> İmzası: Didim'de Yaşam
              </h1>
            </TextAppearAnimation>
            <RevealWrapperV2 as="figure" className="reveal-me mb-4 w-full lg:mb-6">
              <Image src={hero01} alt="Hero Img 01" className="w-full" />
            </RevealWrapperV2>
            <RevealWrapper as="figure" className="reveal-me w-full">
              <Image src={hero02} alt="Hero Img 02" className="w-full" />
            </RevealWrapper>
          </div>
          <div className="w-full flex-1 max-lg:self-center">
            <RevealWrapper as="figure" className="reveal-me">
              <Image src={hero03} alt="Hero Img 03" className="w-full" />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroV9
