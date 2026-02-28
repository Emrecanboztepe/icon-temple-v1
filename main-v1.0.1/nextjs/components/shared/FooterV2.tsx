import footerData from '@/data/footer.json'
import Image from 'next/image'
import Link from 'next/link'

const FooterV2 = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="bg-backgroundBody dark:bg-secondary">
        <h5 className="footer-text-v2 w-full text-nowrap text-center font-satoshi text-[120px] font-medium uppercase leading-[100%] sm:text-[200px] md:text-[258px] lg:text-[300px] xl:text-[350px] 2xl:text-[386px]">
          ICON
        </h5>
      </div>
      <div className="-mt-10 bg-backgroundBody py-4 dark:bg-dark sm:-mt-[70px] md:-mt-24 xl:-mt-28">
        <div className="container">
          {/* Footer Content Grid */}
          <div className="relative z-10 flex flex-col flex-wrap justify-center gap-x-8 gap-y-10 pt-10 sm:flex-row sm:justify-between sm:gap-y-16 md:pt-20">
            {/* Logo and Description Section */}
            <div className="max-w-[360px] pr-8">
              <div className="mb-6">
                <Image src="/images/logo.png" alt="Icon Temple Logo" width={150} height={60} className="h-auto w-[150px]" />
              </div>
              <p className="text-base leading-6">
                Temple Grup, 1993 yılından bu yana turizm, inşaat ve tarım sektörlerinde güven ve kaliteyi esas alan çözümler sunmaktadır. Didim'in ikonik yapısı Icon Temple ile yaşam standartlarını en üst seviyeye taşımayı hedefliyoruz.
              </p>
            </div>

            {footerData.map((section, index) => (
              <div key={`Id_${index}`}>
                <h5 className="mb-4 text-lg font-medium leading-[1.1] md:text-xl">{section.title}</h5>
                <ul>
                  {section.links.map(({ href, label }) => (
                    <li key={href} className="mb-2">
                      <Link
                        href={href}
                        className="block text-base font-normal leading-7 tracking-[0.36px] transition-colors duration-300 hover:text-primary">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div>
              <h5 className="mb-4 text-lg font-medium leading-[1.1] md:text-xl">İletişim</h5>
              <div className="space-y-3">
                <div>
                  <h6 className="mb-1 text-base font-medium">Telefon</h6>
                  <Link href="tel:+905437954549" className="block text-base leading-6 hover:text-primary">
                    +90 543 795 45 49
                  </Link>
                </div>
                <div>
                  <h6 className="mb-1 text-base font-medium">E-Posta</h6>
                  <Link href="mailto:info@icontemple.com" className="block text-base leading-6 hover:text-primary">
                    info@icontemple.com
                  </Link>
                </div>
                <div>
                  <h6 className="mb-1 text-base font-medium">Adres</h6>
                  <p className="text-base leading-6">
                    Yalı Caddesi, Altınkum, <br />
                    Didim, Türkiye
                  </p>
                </div>
              </div>
              <div className="mt-7 flex gap-6 md:mt-10">
                <span>
                  <Link href="https://www.facebook.com/staticmania">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="stroke-[#565656] duration-200 hover:stroke-primary">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.125 6.875H11.875C11.3777 6.875 10.9008 7.07254 10.5492 7.42418C10.1975 7.77581 10 8.25272 10 8.75V17.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7.5 11.25H12.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.youtube.com/channel/UCAaNCn1kzI1fXD4-fPD157Q">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M1.875 9.99998C1.875 12.3246 2.11517 13.6886 2.29774 14.3896C2.34654 14.581 2.44026 14.7581 2.57114 14.9061C2.70201 15.0541 2.86627 15.1688 3.0503 15.2407C5.66569 16.2457 10 16.2181 10 16.2181C10 16.2181 14.3343 16.2457 16.9497 15.2407C17.1337 15.1688 17.298 15.0541 17.4288 14.9061C17.5597 14.7581 17.6534 14.581 17.7022 14.3896C17.8848 13.6886 18.125 12.3246 18.125 9.99998C18.125 7.67533 17.8848 6.3114 17.7023 5.6104C17.6535 5.41894 17.5597 5.24188 17.4289 5.09386C17.298 4.94585 17.1337 4.83115 16.9497 4.75927C14.3343 3.75422 10 3.78181 10 3.78181C10 3.78181 5.66574 3.75422 3.05033 4.75926C2.86629 4.83114 2.70203 4.94584 2.57116 5.09385C2.44029 5.24186 2.34656 5.41893 2.29776 5.61038C2.11518 6.31138 1.875 7.67533 1.875 9.99998Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.instagram.com/staticmania">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M13.4375 2.8125H6.5625C4.49143 2.8125 2.8125 4.49143 2.8125 6.5625V13.4375C2.8125 15.5086 4.49143 17.1875 6.5625 17.1875H13.4375C15.5086 17.1875 17.1875 15.5086 17.1875 13.4375V6.5625C17.1875 4.49143 15.5086 2.8125 13.4375 2.8125Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0625 6.875C14.5803 6.875 15 6.45527 15 5.9375C15 5.41973 14.5803 5 14.0625 5C13.5447 5 13.125 5.41973 13.125 5.9375C13.125 6.45527 13.5447 6.875 14.0625 6.875Z"
                        fill="#565656"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-10 border-t pt-5 text-center dark:border-dark">
            Copyright © <Link href="https://purpagency.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Purp Agency</Link> 💜 Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
