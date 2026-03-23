'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_IMAGES = [
  { id: 1, src: '/images/marquee-img/1.webp' },
  { id: 2, src: '/images/marquee-img/2.webp' },
  { id: 3, src: '/images/marquee-img/3.webp' },
  { id: 4, src: '/images/marquee-img/4.webp' },
  { id: 5, src: '/images/marquee-img/5.webp' },
  { id: 6, src: '/images/marquee-img/6.webp' },
  { id: 7, src: '/images/marquee-img/7.webp' },
  { id: 8, src: '/images/marquee-img/8.webp' },
  { id: 9, src: '/images/marquee-img/9.webp' },
  { id: 10, src: '/images/marquee-img/10.webp' },
  { id: 11, src: '/images/marquee-img/1.webp' },
  { id: 12, src: '/images/marquee-img/2.webp' },
  { id: 13, src: '/images/marquee-img/3.webp' },
  { id: 14, src: '/images/marquee-img/4.webp' },
  { id: 15, src: '/images/marquee-img/5.webp' },
  { id: 16, src: '/images/marquee-img/6.webp' },
  { id: 17, src: '/images/marquee-img/7.webp' },
  { id: 18, src: '/images/marquee-img/8.webp' },
  { id: 19, src: '/images/marquee-img/9.webp' },
  { id: 20, src: '/images/marquee-img/10.webp' },
]

const SkewMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  function createMarqueeScroll(target: HTMLElement, partSelector: string) {
    const items = gsap.utils.toArray<HTMLElement>(partSelector)

    const itemCount = items.length / 2
    const totalWidth = target.scrollWidth / 2

    gsap.to(target, {
      x: `-=${totalWidth}`,
      duration: itemCount * 2,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0)),
      },
    })
  }

  useGSAP(
    () => {
      if (containerRef.current && marqueeRef.current) {
        createMarqueeScroll(marqueeRef.current, '.marquee-part')

        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        })
      }
    },
    { scope: containerRef },
  )

  return (
    <div style={{ overflowX: 'clip', overflowY: 'visible' }} className="w-full">
      <section className="relative w-full overflow-visible pb-16 pt-4 lg:pb-20">
        <div
          ref={containerRef}
          className="mx-auto max-w-[2000px]"
          style={{
            transform:
              'translate3d(-200px, 80px, 0px) scale3d(1, 1, 1) rotateX(12deg) rotateY(6deg) rotateZ(352deg) skew(3deg, 359deg)',
            transformStyle: 'preserve-3d',
          }}>
          <div ref={marqueeRef} className="flex flex-nowrap gap-3 lg:gap-5">
            {MARQUEE_IMAGES.map((img) => (
              <figure key={img.id} className="marquee-part z-50 flex flex-shrink-0 items-center justify-center">
                <Image
                  width={300}
                  height={350}
                  src={img.src}
                  alt={`Marquee ${img.id}`}
                  className="h-[175px] w-[150px] object-cover lg:h-[350px] lg:w-[300px]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkewMarquee
