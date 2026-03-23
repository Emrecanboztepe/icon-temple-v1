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

export default ContactPage
