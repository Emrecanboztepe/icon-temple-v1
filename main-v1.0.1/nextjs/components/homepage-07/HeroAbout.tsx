'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3
        ref={revealRef}
        className="reveal-text-2 text-xl text-secondary dark:text-backgroundBody sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Icon Temple: Modern Yaşamın Yeni Simgesi. Turizmin kalbi Didim Altınkum'da, denize sıfır konumu ve benzersiz
        mimarisiyle sadece bir ev değil, her günü tatil tadında bir yaşam vadediyoruz. Konforun teknolojiyle buluştuğu
        bu özel projede, geleceğin yaşam standartlarını bugün deneyimleyin.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container"></RevealWrapper>
  )
}

export default HeroAbout
