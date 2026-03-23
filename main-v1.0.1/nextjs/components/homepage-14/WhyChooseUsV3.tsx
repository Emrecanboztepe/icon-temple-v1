import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyChooseUsV3 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge"></RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 font-instrument italic max-sm:text-[28px]">
              Standartları Değiştiren Ayrıcalıklı Detaylar
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Modern teknoloji ve yüksek konforun kusursuz uyumu.</p>
          </TextAppearAnimation>
        </div>
        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Zamansız Mimari Tasarım</h5>
              <p>Modern çizgilerle estetiğin buluştuğu, yüksek işçilik kalitesine sahip uzun ömürlü yapılar.</p>
            </div>
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Üst Düzey Isı Konforu</h5>
              <p>Yerden ısıtma ve gizli tesisatlı multi split inverter klima sistemi ile her mevsim ideal sıcaklık.</p>
            </div>
            <div className="flex-1 border px-[30px] py-10 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Akıllı Ev Otomasyonu</h5>
              <p>
                Aydınlatma ve iklimlendirmeyi uzaktan yönetebildiğiniz, geleceğin teknolojisiyle donatılmış yaşam
                senaryoları.
              </p>
            </div>
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Akustik ve Isı Yalıtımı</h5>
              <p>
                Yüksek verimli dış cephe yalıtımı ve huzurlu bir yaşam alanı sunan geliştirilmiş ses yalıtım
                standartları.
              </p>
            </RevealWrapper>
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Anahtar Teslim Konfor</h5>
              <p>Ankastre mutfak ekipmanları eksiksiz, kullanıma hazır ve her detayı düşünülmüş prestijli daireler.</p>
            </RevealWrapper>
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default WhyChooseUsV3
