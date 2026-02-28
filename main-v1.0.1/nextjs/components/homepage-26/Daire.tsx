import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Daire = () => {
  const features = [
    "Mavi Bayraklı Plaj: Denize sadece 30 Metre mesafede, Altınkum'un kalbinde.",
    'Şehir Merkezi: Didim merkezine ve alışveriş noktalarına yalnızca 3.5 km uzaklıkta.',
    "Ulaşım Kolaylığı: Milas-Bodrum Havalimanı'na 145 km konforlu sürüş mesafesi.",
    'Antik Miras: Apollon Tapınağı ve tarihi gezi alanlarına dakikalar içinde ulaşım.',
  ]

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center md:mb-20">2+1 Daire</h2>
        </TextAppearAnimation>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-20">
          <RevealWrapper className="order-2 md:order-1">
            <p className="mb-6 text-base leading-relaxed md:text-lg">
              Icon Temple'da 2+1 daireler, ferahlık ve fonksiyonelliği deniz manzarasıyla birleştiriyor. Modern
              yaşamın tüm ihtiyaçları düşünülerek tasarlanan bu daireler; yerden ısıtma sistemi ve multi split klima
              altyapısı ile her mevsim ideal konforu sunar.
            </p>
            <p className="mb-8 text-base leading-relaxed md:text-lg">
              Akıllı ev otomasyonu sayesinde evinizi dijital olarak yönetebilir, ankastre mutfak ekipmanları eksiksiz
              teslim edilen mutfağınızda taşınmaya hazır lüksün keyfini çıkarabilirsiniz. Yüksek ısı ve ses yalıtımı
              standartlarıyla, Altınkum'un merkezinde huzurlu ve sessiz bir yaşam sizi bekliyor.
            </p>

            {/* Tikli Liste */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper className="order-1 md:order-2">
            <figure className="relative">
              <img
                src="/images/hero-img/about-hero-1.png"
                alt="2+1 Daire Plan"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </figure>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Daire
