import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeader from '../shared/SectionHeader'
import TeamsHome, { ITeamMemberHome } from './TeamsHome'

const teamMembers: ITeamMemberHome[] = [
  {
    id: '1',
    image: '/images/portfolio/project-img-02.png',
    title: 'Mavinin Kalbi: Altınkum Sahili',
    position: 'Didim',
    link: '/didim-ozellikleri',
  },
  {
    id: '2',
    image: '/images/portfolio/project-img-01.png',
    title: 'Tarihle İç İçe Bir Yaşam',
    position: 'Didim',
    link: '/didim-ozellikleri',
  },
  {
    id: '3',
    image: '/images/portfolio/project-img-04.png',
    title: 'Dört Mevsim Yaşayan Şehir',
    position: 'Didim',
    link: '/didim-ozellikleri',
  },
  {
    id: '4',
    image: '/images/hero-img/hero-img-03.png',
    title: "Ege'nin Prestijli Yatırımı",
    position: 'Didim',
    link: '/didim-ozellikleri',
  },
]

const TeamGalleryHome = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container w-full">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row md:items-center lg:justify-between">
          <SectionHeader
            italicTitle="Didim'in İkonik"
            headingTitle="Yaşam Alanları"
            description="Modern mimariyi Didim'in eşsiz doğasıyla buluşturuyoruz. Her biri özenle seçilmiş projelerimizle, sadece bir ev değil, seçkin bir yaşam tarzı sunuyoruz."
          />
        </div>

        <RevealWrapper className="max-lg:hidden lg:block">
          <TeamsHome team={teamMembers} />
        </RevealWrapper>

        <div className="max-lg:block lg:hidden">
          <div className="relative grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <RevealWrapper key={member.id} className="group relative">
                <Link href={member.link || '#'}>
                  <Image
                    src={member.image}
                    width={344}
                    height={388}
                    alt={member.title}
                    className="aspect-[4/3] w-full object-cover shadow-lg transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 m-5 bg-primary px-4 py-4">
                    <div className="blog-title mb-1">
                      <h3 className="text-xl dark:text-secondary lg:text-4xl lg:leading-[1.2] lg:tracking-[-1.08px]">
                        {member.title}
                      </h3>
                    </div>
                    <p className="text-lg font-light leading-5 text-black/70 dark:text-secondary">{member.position}</p>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamGalleryHome
