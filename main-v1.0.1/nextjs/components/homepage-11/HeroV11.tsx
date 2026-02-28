import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV11 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:pb-[93px] md:pt-[150px] lg:pt-44 xl:pt-[200px]">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>
      <div className="container">
        <RevealWrapper className="rv-badge reveal-me mb-4 md:mb-6">
          <span className="rv-badge-text">ICON TEMPLE</span>
        </RevealWrapper>
        <TextAppearAnimation>
          <h1 className="text-appear mb-3">
            Her detayda
            <span className="font-instrument italic"> ayrıcalıklı bir yaşam</span>
          </h1>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear">
            Estetiğin fonksiyonellikle buluştuğu Icon Temple projesinde, Didim'in en özel lokasyonunu premium malzeme seçimi ve üst segment işçilikle bir araya getirdik.
          </p>
        </TextAppearAnimation>
      </div>
    </section>
  )
}

export default HeroV11
