'use client'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Didim = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const images = [
    { id: 1, src: '/images/portfolio/project-img-01.png', alt: 'Didim 1' },
    { id: 2, src: '/images/portfolio/project-img-02.png', alt: 'Didim 2' },
    { id: 3, src: '/images/portfolio/project-img-03.png', alt: 'Didim 3' },
    { id: 4, src: '/images/portfolio/project-img-04.png', alt: 'Didim 4' },
  ]

  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center md:mb-20">Didim Güzellikleri</h2>
        </TextAppearAnimation>
      </div>

      <div className="mx-auto max-w-[2000px] px-4">
        {/* Desktop Layout */}
        <div className="hidden items-center justify-center gap-8 lg:flex">
          {/* Sol 2 görsel - yan yana */}
          <div className="flex gap-8">
            <RevealWrapper>
              <figure className="overflow-hidden rounded-lg">
                <img src={images[0].src} alt={images[0].alt} className="h-[500px] w-[350px] object-cover" />
              </figure>
            </RevealWrapper>
            <RevealWrapper>
              <figure className="overflow-hidden rounded-lg">
                <img src={images[1].src} alt={images[1].alt} className="h-[500px] w-[350px] object-cover" />
              </figure>
            </RevealWrapper>
          </div>

          {/* Ortada video */}
          <RevealWrapper>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setIsVideoOpen(true)}>
              <img
                src="/images/hero-img/video-thumbnail.png"
                alt="Video Thumbnail"
                className="h-[500px] w-[700px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/50">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/80 transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Sağ 2 görsel - yan yana */}
          <div className="flex gap-8">
            <RevealWrapper>
              <figure className="overflow-hidden rounded-lg">
                <img src={images[2].src} alt={images[2].alt} className="h-[500px] w-[350px] object-cover" />
              </figure>
            </RevealWrapper>
            <RevealWrapper>
              <figure className="overflow-hidden rounded-lg">
                <img src={images[3].src} alt={images[3].alt} className="h-[500px] w-[350px] object-cover" />
              </figure>
            </RevealWrapper>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4">
            {/* Video - İlk sırada */}
            <RevealWrapper className="flex-shrink-0">
              <div
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setIsVideoOpen(true)}>
                <img
                  src="/images/hero-img/video-thumbnail.png"
                  alt="Video Thumbnail"
                  className="h-[300px] w-[400px] object-cover md:h-[400px] md:w-[550px]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/80 md:h-24 md:w-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Fotoğraflar */}
            {images.map((img) => (
              <RevealWrapper key={img.id} className="flex-shrink-0">
                <figure className="overflow-hidden rounded-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-[300px] w-[220px] object-cover md:h-[400px] md:w-[280px]"
                  />
                </figure>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal/Popup */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/MKKds3jugHU?autoplay=1"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}

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

export default Didim
