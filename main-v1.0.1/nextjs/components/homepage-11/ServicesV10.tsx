'use client'

import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Yapısal Temel ve Kaba İnşaat',
    description:
      "Projenin iskeletinde Batıçim, Entegre ve Knauf gibi sektör devlerinin yüksek mukavemetli çimento ve alçı sistemleri kullanılmıştır. İç ve dış yüzeylerde Kalekim harç teknolojileri ile uzun ömürlü yapı standartları garanti altına alınmıştır.",
    image: '/images/services-2/service-item-1.png',
  },
  {
    id: 2,
    title: 'Cephe Mühendisliği ve Yalıtım',
    description:
      'Estetik ve performansın birleştiği dış cephede ASAŞ Natura kompozit paneller ve Boardex plakalar tercih edilmiştir. Isı ve ses konforu için İzocam, Dalmacyalı ve Kayser Styropor mantolama sistemleri ile maksimum enerji verimliliği sağlanmıştır.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 3,
    title: 'İklimlendirme ve Konfor (VRF)',
    description: "İç mekân hava kalitesi ve ısı dengesi, Samsung'un gizli tesisatlı inverter multi split (VRF) klima sistemleri ile yönetilir. Siemens ankastre setleri (ocak, davlumbaz, buzdolabı, bulaşık makinesi) ile mutfaklarda üst segment bir kullanım deneyimi sunulur.",
    image: '/images/services-2/service-item-3.png',
  },
  {
    id: 4,
    title: 'Akıllı Cam ve Doğrama Sistemleri',
    description: "Şişecam Isıcam K Serisi (Solar Low-E) temperli camlar ile güneş kontrolü ve ısı yalıtımı en üst seviyeye taşınmıştır. ABC Dış Cephe ve Yavuzlar Alüminyum profilleri, estetik kavisli cam tasarımlarıyla mimari bir imza oluşturur.",
    image: '/images/services-2/service-item-4.png',
  },
  {
    id: 5,
    title: 'Islak Hacim ve Vitrifiye Tasarımı',
    description: 'Banyo ve mutfaklarda Hansgrohe armatürler, Ukinox granit evyeler ve Geberit gömme rezervuar sistemleri kullanılmıştır. Rimfree (kanalsız) klozet teknolojisi ile hijyen ve modern tasarım bir araya getirilmiştir.',
    image: '/images/services-2/service-item-5.png',
  },
  {
    id: 6,
    title: 'Altyapı ve Tesisat Güvenliği',
    description: "Su ve atık yönetiminde Egeplast, Egeyıldız ve Egep'in yüksek basınca dayanıklı boru sistemleri tercih edilmiştir. Çatı ve teras alanlarında Sim Membran'ın bitümlü su yalıtım çözümleriyle yapı güvenliği tam koruma altına alınmıştır.",
    image: '/images/services-2/service-item-6.png',
  },
  {
    id: 7,
    title: 'Elektrik, Otomasyon ve Donanım',
    description: 'El-Bi Electric anahtar grupları, Uğur Kablo altyapısı ve Philips/Cata aydınlatma bileşenleri ile güvenli bir elektrik mimarisi kurulmuştur. Girişlerde Kale kilit sistemleri, iç mekanlarda ise Pimador ve Sacci gibi nitelikli donanım markaları kullanılmıştır.',
    image: '/images/services-2/service-item-7.png',
  },
]

const ServicesV10 = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollSpeed = 1

    const animate = () => {
      if (!isPaused && !isDragging && container) {
        container.scrollLeft += scrollSpeed
        
        // Reset for infinite loop
        const maxScroll = container.scrollWidth / 4
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setIsPaused(false), 2000)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setTimeout(() => setIsPaused(false), 2000)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000)
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Kusursuz detaylar, <i className="font-instrument">kalıcı eserler</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper as="p">
            Temelden çatıya her noktada en iyi çözüm ortaklarıyla çalışıyoruz. Samsung, Siemens ve Hansgrohe gibi küresel markalarla donatılan Icon Temple, estetiği ileri teknolojiyle birleştiriyor.
          </RevealWrapper>
        </div>
      </div>

      <div className="pt-10">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-scroll scrollbar-hide"
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            WebkitOverflowScrolling: 'touch',
            userSelect: 'none'
          }}>
          {[...data, ...data, ...data, ...data].map((item, index) => (
            <div key={`${item.id}-${index}`} className="group w-[370px] flex-shrink-0 px-3">
              <figure className="hero-video-container overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  draggable={false}
                />
              </figure>
              <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{item.title}</h3>
              <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default ServicesV10
