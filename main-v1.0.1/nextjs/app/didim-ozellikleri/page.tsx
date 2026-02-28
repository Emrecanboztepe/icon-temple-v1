import AboutV7 from '@/components/homepage-09/AboutV7'
import HeroV9 from '@/components/homepage-09/HeroV9'
import PersonalProjects from '@/components/homepage-09/PersonalProjects'
import LayoutOne from '@/components/shared/LayoutOne'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'

export const metadata = {
  title: 'Personal Branding - Rivor',
}
const page = () => {
  return (
    <LayoutOne>
      <HeroV9 />
      <AboutV7 />
      <PersonalProjects />
      <OurWorkShowcase />
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

export default page
