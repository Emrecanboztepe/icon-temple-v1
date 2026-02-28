import ContactFormIconTemple from '@/components/contactpage/ContactFormIconTemple'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'İletişim - Icon Temple',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <ContactFormIconTemple />
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

export default ContactPage
