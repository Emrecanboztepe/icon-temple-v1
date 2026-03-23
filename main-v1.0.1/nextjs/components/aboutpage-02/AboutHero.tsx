import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const AboutHero = () => {
  return (
    <section className="pb-14 pt-28 md:pb-20 md:pt-48 lg:pb-[100px] lg:pt-[200px]">
      <RevealWrapper className="container">
        <div className="flex flex-col items-center justify-end gap-x-20 gap-y-5 sm:flex-row md:gap-y-10">
          <h1 className="font-instrument text-5xl font-normal italic md:text-6xl lg:text-9xl xl:text-[156px] xl:leading-[1.1]">
            Hakkımızda
          </h1>

          <p className="max-w-[470px]">
            Temple Grup'un 35 yılı aşkın turizm ve inşaat tecrübesini, modern mimarinin en seçkin detaylarıyla
            buluşturuyoruz. Icon Temple, Didim'in kalbinde, denize sadece birkaç adım mesafede, sadece bir konut değil;
            estetik, teknoloji ve konforun harmanlandığı ayrıcalıklı bir yaşam kültürü sunmak için tasarlandı.
          </p>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default AboutHero
