'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

const AboutV10 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="about relative !overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h4 ref={revealRef} className="mx-auto mb-3">
          Yılların sektörel tecrübesiyle, mühendislik ve estetiği benzersiz bir yaşam projesinde birleştiriyoruz.
        </h4>
        <RevealWrapper as="p" className="max-w-5xl">
          Icon Temple, her aşamasında titizlikle planlanmış teknik detayları ve dünya standartlarındaki malzeme kalitesini bir araya getiriyor. Amacımız, sadece bir konut değil; güven, teknoloji ve konforun harmanlandığı, beklentilerinizin ötesinde bir yapı sunmaktır.
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutV10
