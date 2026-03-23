'use client'
import React, { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const ContactFormIconTemple = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    apartmentType: '1+1',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert(`${formData.name} Mesajınız alındı!`)
  }

  return (
    <section className="pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-40 xl:pb-[100px] xl:pt-44">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Sol Taraf - İletişim Bilgileri */}
          <RevealWrapper className="reveal-me space-y-8">
            <div>
              <h2 className="mb-6 font-instrument text-4xl italic md:text-5xl lg:text-6xl">İletişim</h2>
              <p className="mb-8 text-lg leading-relaxed">
                <span className="font-instrument italic">Hayalinizdeki</span> Yaşama Bir Adım Kaldı. Icon Temple'ın
                ayrıcalıklı dünyasında yerinizi almak, detaylı katalog ve fiyat bilgisine ulaşmak için formu doldurun.
                Satış ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>
            </div>

            {/* İletişim Detayları - Grid Layout */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-medium">Telefon</h3>
                <a href="tel:+905437954549" className="text-lg text-colorText hover:text-primary">
                  +90 543 795 45 49
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium">Lokasyon</h3>
                <p className="text-lg text-colorText">Yalı Caddesi, Altınkum, Didim</p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium">E-Posta</h3>
                <a href="mailto:info@icontemple.com" className="text-lg text-colorText hover:text-primary">
                  info@icontemple.com
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium">Lokasyon</h3>
                <p className="text-lg text-colorText">Yalı Caddesi, Altınkum, Didim</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3171.3667537508063!2d27.284696075864147!3d37.35749797209353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDIxJzI3LjAiTiAyN8KwMTcnMTQuMiJF!5e0!3m2!1str!2str!4v1771929735371!5m2!1str!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </RevealWrapper>

          {/* Sağ Taraf - Form */}
          <RevealWrapper as="form" onSubmit={handleSubmit} className="reveal-me flex flex-col gap-[30px]">
            {/* Ad Soyad - Full Width */}
            <div>
              <label
                htmlFor="name"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Adınız ve Soyadınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız ve Soyadınız"
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                required
              />
            </div>

            {/* Konu ve E-posta - Yan Yana */}
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
              <div>
                <label
                  htmlFor="subject"
                  className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Örn: Satış, Bilgi, İş Birliği"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                  required
                />
              </div>
            </div>

            {/* Daire Tipi - Full Width */}
            <div className="relative">
              <label
                htmlFor="apartmentType"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                İlgilendiğiniz Daire Tipi
              </label>
              <select
                id="apartmentType"
                name="apartmentType"
                value={formData.apartmentType}
                onChange={handleChange}
                className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                required>
                <option value="1+1">1+1 Daireler</option>
                <option value="2+1">2+1 Daireler</option>
                <option value="3+1">3+1 Daireler</option>
                <option value="Bilgi">Genel Bilgi</option>
              </select>
              <span className="absolute right-5 top-1/2 translate-y-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline dark:hidden">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  className="hidden dark:inline"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Mesaj - Full Width */}
            <div>
              <label
                htmlFor="message"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sorularınızı veya mesajınızı buraya yazabilirsiniz"
                rows={5}
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                required></textarea>
            </div>

            {/* Buton */}
            <div className="sm:mt-14">
              <button type="submit" className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>Mesajı Gönder</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Mesajı Gönder</span>
                </div>
              </button>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ContactFormIconTemple
