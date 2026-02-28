import Didim from '@/components/homepage-26/Didim'
import HeroV26 from '@/components/homepage-26/HeroV26'
import Daire from '@/components/homepage-26/Daire'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import Clients from '@/components/homepage-03/Clients'
import AboutV15 from '@/components/homepage-16/AboutV15'
import CTA from '@/components/shared/CTA'
import OurWork from '@/components/homepage-07/OurWork'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import VideoV2 from '@/components/shared/VideoV2'

export const metadata = {
  title: "Icon Temple Residence 3+1 Daire - Didim'in Yeni İkonu",
}

const IconTempleResidence31Daire = () => {
  return (
    <LayoutOne>
      <HeroV26 />
      <VideoV2 />
      <AboutV15
        badge="Hakkımızda"
        title="30 Yıllık Tecrübe ve Yenilikçi Vizyonun Buluşma Noktası"
        subTitle="Icon Temple, grubumuzun turizmdeki hizmet kalitesini ve inşaattaki uzmanlığını bir araya getiren en yeni vizyon projesidir. Altınkum sahilinde, denize sadece 30 metre mesafede konumlanan bu ikonik yapı; üst segment rezidans standartlarını, akıllı ev teknolojileri ve zamansız bir estetikle harmanlayarak Didim'in çehresini değiştiriyor."
        description="1993 yılından bu yana turizm, inşaat ve tarım sektörlerinde güvenin simgesi olan Temple Grup; Ege'nin en değerli lokasyonlarında nitelikli yaşam alanları geliştirmeye devam ediyor."
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Daire />
      <WhyChooseUsV3 />
      <OurWork />
      <Clients />
      <Didim />
       <CTA buttonText="ŞİMDİ İLETİŞİME GEÇİN">
        Yeni yaşamınızı
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
       birlikte planlayalım.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Bir kahve eşliğinde?</i>
      </CTA>
    </LayoutOne>
  )
}

export default IconTempleResidence31Daire
