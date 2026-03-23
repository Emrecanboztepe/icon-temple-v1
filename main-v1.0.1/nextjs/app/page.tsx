import HeroV7 from '@/components/homepage-07/HeroV7'
import AboutV15 from '@/components/homepage-16/AboutV15'
import Clients from '@/components/homepage-03/Clients'
import VideoV2 from '@/components/shared/VideoV2'
import OurWork from '@/components/homepage-07/OurWork'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Didim’in Yeni İkonu: Icon Temple',
}

const Home = () => {
  return (
    <LayoutOne>
      <HeroV7 />
      <AboutV15
        badge="Hakkımızda "
        title="30 Yıllık Tecrübe ve Yenilikçi Vizyonun Buluşma Noktası"
        subTitle="Icon Temple, grubumuzun turizmdeki hizmet kalitesini ve inşaattaki uzmanlığını bir araya getiren en yeni vizyon projesidir. Altınkum sahilinde, denize sadece 30 metre mesafede konumlanan bu ikonik yapı; üst segment rezidans standartlarını, akıllı ev teknolojileri ve zamansız bir estetikle harmanlayarak Didim'in çehresini değiştiriyor."
        description="1993 yılından bu yana turizm, inşaat ve tarım sektörlerinde güvenin simgesi olan Temple Grup; Ege’nin en değerli lokasyonlarında nitelikli yaşam alanları geliştirmeye devam ediyor."
        buttonText="Daha fazla bilgi "
        buttonLink="/hakkimizda"
      />
      <Clients />
      <VideoV2 />
      <OurWorkShowcase />
      <OurWork />
      <CTA buttonText="ŞİMDİ İLETİŞİME GEÇİN">
        Yeni
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/yasami.jpg' },
            { id: '2', img: '/images/agent/anı.jpg' },
            { id: '3', img: '/images/agent/konfor.jpg' },
          ]}
        />
        birlikte planlayalım.
      </CTA>
    </LayoutOne>
  )
}

export default Home
