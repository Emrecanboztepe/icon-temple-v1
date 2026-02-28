'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

type InstagramItem = {
  id: number
  image: string
  link: string
}

const data: InstagramItem[] = [
  {
    id: 1,
    image: '/images/testimonial/testimonial-1.png',
    link: '',
  },
  {
    id: 2,
    image: '/images/testimonial/testimonial-2.png',
    link: '',
  },
  {
    id: 3,
    image: '/images/testimonial/testimonial-3.png',
    link: '',
  },
  {
    id: 4,
    image: '/images/testimonial/testimonial-4.png',
    link: '',
  },
  {
    id: 5,
    image: '/images/testimonial/testimonial-5.png',
    link: '',
  },
  {
    id: 6,
    image: '/images/testimonial/testimonial-6.png',
    link: '',
  },
  {
    id: 7,
    image: '/images/testimonial/testimonial-7.png',
    link: '',
  },
  {
    id: 8,
    image: '/images/testimonial/testimonial-8.png',
    link: '',
  },
  {
    id: 9,
    image: '/images/testimonial/testimonial-9.png',
    link: '',
  },
]

const InstagramGallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Görselleri 3 kez tekrarla (sonsuz döngü için)
  const extendedData = [...data, ...data, ...data]

  const updateSlider = useCallback(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!slides.length) return

    const totalSlides = slides.length
    const gap = 20
    const slideWidth = slides[0]?.offsetWidth || 0

    slides.forEach((slide, index) => {
      const offset = index - currentIndex
      const zIndex = totalSlides - Math.abs(offset)

      let xPos = offset * (slideWidth + gap)
      let scale = 1 - Math.abs(offset) * 0.2
      let opacity = 1 - Math.abs(offset) * 0.1
      let zPos = -Math.abs(offset) * 100

      if (offset === 0) {
        scale = 1.2
        zPos = 0
      }

      if (slide) {
        slide.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) scale(${scale})`
        slide.style.opacity = opacity.toString()
        slide.style.zIndex = zIndex.toString()
      }
    })
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1
      // Ortadaki set bitince, animasyonsuz başa dön
      if (next >= data.length * 2) {
        setTimeout(() => setCurrentIndex(data.length), 0)
        return data.length
      }
      return next
    })
  }, [])

  const startSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(nextSlide, 3000)
  }, [nextSlide])

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    // Ortadaki set'ten başla
    setCurrentIndex(data.length)
  }, [])

  useEffect(() => {
    updateSlider()
    startSlider()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [updateSlider, startSlider])

  const handleSlideMouseEnter = useCallback(() => {
    stopSlider()
  }, [stopSlider])

  const handleSlideMouseLeave = useCallback(() => {
    startSlider()
  }, [startSlider])

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mb-8 text-center md:mb-14">
        <RevealWrapper className="rv-badge reveal-me">
          <span className="rv-badge-text">Her Detayda Bir Estetik Hikayesi</span>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mt-3">
            Icon Temple’ın mimari ruhunu ve
            <i className="font-instrument">  modern yaşamın ayrıntılarını keşfedin.</i>
          </h2>
        </TextAppearAnimation>
      </div>
      <div className="relative overflow-hidden" ref={sliderRef}>
        <div className="flex h-[500px] items-center justify-center">
          <div className="instagram-slider-container perspective-[1000px] relative flex w-full max-w-[1800px] items-center justify-center">
            <div
              className="slides-wrapper relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}>
              {extendedData.map((item, index) => (
                <div
                  key={`instagram-${index}`}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="slide absolute w-[280px] cursor-pointer transition-all duration-500 md:w-[350px]"
                  onMouseEnter={handleSlideMouseEnter}
                  onMouseLeave={handleSlideMouseLeave}>
                  <figure className="group relative overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={`Gallery item ${item.id}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery
