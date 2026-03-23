import SectionHeader from '../shared/SectionHeader'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'

const company = [
  {
    id: 1,
    logo: '/images/icons/company/client-top-1.png',
  },
  {
    id: 2,
    logo: '/images/icons/company/client-top-2.png',
  },
  {
    id: 3,
    logo: '/images/icons/company/client-top-3.png',
  },
  {
    id: 4,
    logo: '/images/icons/company/client-top-4.png',
  },
  {
    id: 5,
    logo: '/images/icons/company/client-top-5.png',
  },

  {
    id: 6,
    logo: '/images/icons/company/client-top-7.png',
  },

  {
    id: 7,
    logo: '/images/icons/company/client-top-9.png',
  },
  {
    id: 8,
    logo: '/images/icons/company/client-top-10.png',
  },
]
const reverseCompany = [
  {
    id: 1,
    logo: '/images/icons/company/client-bottom-1.png',
  },
  {
    id: 2,
    logo: '/images/icons/company/client-bottom-2.png',
  },
  {
    id: 3,
    logo: '/images/icons/company/client-bottom-3.png',
  },
  {
    id: 4,
    logo: '/images/icons/company/client-bottom-4.png',
  },
  {
    id: 5,
    logo: '/images/icons/company/client-bottom-5.png',
  },
  {
    id: 6,
    logo: '/images/icons/company/client-bottom-6.png',
  },
  {
    id: 7,
    logo: '/images/icons/company/client-bottom-7.png',
  },
  {
    id: 8,
    logo: '/images/icons/company/client-bottom-8.png',
  },

  {
    id: 9,
    logo: '/images/icons/company/client-bottom-10.png',
  },
]

const Clients = () => {
  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            headingTitle="Güçlü Geçmiş"
            italicTitle="Güvenli Gelecek"
            serviceHeadingColor
            description="Temple Grup çatısı altındaki otellerimiz ve tarımsal işletmelerimizle, farklı sektörlerdeki tecrübemizi Icon Temple'ın her detayına yansıtıyoruz."
          />
        </div>
      </div>
      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center gap-x-16 py-8 md:gap-x-20">
            {company.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.logo}
                  alt="client Logo"
                  width={180}
                  height={80}
                  className="h-[80px] w-auto object-contain md:h-[100px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center gap-x-16 py-8 md:gap-x-20">
            {reverseCompany.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.logo}
                  alt="client Logo"
                  width={180}
                  height={80}
                  className="h-[80px] w-auto object-contain md:h-[100px]"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default Clients
