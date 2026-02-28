import RevealWrapper from '../animation/RevealWrapper'

const AboutV7 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper className="rv-badge mb-3.5 md:mb-6 lg:mb-12">
          <span className="rv-badge-text">About</span>
        </RevealWrapper>
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row lg:items-start">
          <RevealWrapper as="h4" className="mx-auto max-lg:max-w-2xl">
            Didim’de antik çağın ruhu, modern konforla buluşuyor. Icon Temple, sizi Altınkum’un eşsiz sahiline sadece 30 metre mesafede, maviliğin tam kalbinde seçkin bir yaşama davet ediyor.
          </RevealWrapper>
          <RevealWrapper className="max-w-[500px]">
            <p className="mb-5 md:mb-10">
              Dünyaca ünlü Altınkum Plajı, sığ denizi ve kristal berraklığındaki suyuyla Ege’nin en değerli mücevheridir. Burada sabahları balkonunuzda sonsuz maviliğe uyanır, akşamları ise sahil bandındaki seçkin restoranların ve sosyal yaşamın canlı enerjisini kapınızın eşiğinde hissedersiniz.
            </p>
            <p>
             Binlerce yıllık Apollon Tapınağı’nın görkemli gölgesinde, tarihin modern mimariyle harmanlandığı bir lokasyondasınız. Icon Temple; sunduğu rezidans ayrıcalıkları ve stratejik konumuyla hem huzurlu bir sığınak hem de değeri her geçen gün artan, dört mevsim yaşayan prestijli bir yatırım sunar.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV7
