import AboutV10 from '@/components/homepage-11/AboutV10'
import HeroV11 from '@/components/homepage-11/HeroV11'
import OurWork from '@/components/homepage-07/OurWork'
import Clients from '@/components/homepage-03/Clients'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import ServicesV10 from '@/components/homepage-11/ServicesV10'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import VideoV2 from '@/components/shared/VideoV2'

export const metadata = {
  title: 'Video Photography Agency - Rivor',
}

const homepage11 = () => {
  return (
    <LayoutTwo>
      <HeroV11 />
      <VideoV2 />
      <AboutV10 />
      <Clients />
      <ServicesV10 />
      <WhyChooseUsV3 />
      <OurWork />
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
    </LayoutTwo>
  )
}

export default homepage11
