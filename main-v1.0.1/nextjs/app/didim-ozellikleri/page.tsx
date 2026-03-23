import AboutV7 from '@/components/homepage-09/AboutV7'
import HeroV9 from '@/components/homepage-09/HeroV9'
import PersonalProjects from '@/components/homepage-09/PersonalProjects'
import LayoutOne from '@/components/shared/LayoutOne'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'

export const metadata = {
  title: 'Didim - Icon Temple',
}
const page = () => {
  return (
    <LayoutOne>
      <HeroV9 />
      <AboutV7 />
      <PersonalProjects />
      <OurWorkShowcase />
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

export default page
