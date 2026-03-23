import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeader from '../shared/SectionHeader'
import Teams from './Teams'

export interface ITeamMember {
  id: string
  image: string
  title: string
  position: string
}

const teamMembers: ITeamMember[] = [
  {
    id: '1',
    image: '/images/home-ai/team/ai-team-1.png',
    title: '1+1 Daireler',
    position: 'Icon Temple',
  },
  {
    id: '2',
    image: '/images/home-ai/team/ai-team-2.png',
    title: '2+1 Daireler',
    position: 'Icon Temple',
  },
  {
    id: '3',
    image: '/images/home-ai/team/ai-team-3.png',
    title: '3+1 Daireler',
    position: 'Icon Temple',
  },
  {
    id: '4',
    image: '/images/home-ai/team/ai-team-4.png',
    title: 'Didim',
    position: 'Icon Temple',
  },
]

const TeamGallery = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container w-full">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row md:items-center lg:justify-between">
          <SectionHeader
            italicTitle="Yaşam"
            headingTitle="Alanları"
            description="Icon Temple'da her ihtiyaca uygun, modern mimariyle şekillenmiş daire seçenekleri. Geniş yaşam alanları ve yüksek konfor standartlarıyla tasarlanan 1+1, 2+1 ve 3+1 dairelerimizi keşfedin."
          />
        </div>

        <RevealWrapper className="max-lg:hidden lg:block">
          <Teams team={teamMembers} />
        </RevealWrapper>

        <div className="max-lg:block lg:hidden">
          <div className="relative grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <RevealWrapper key={member.id} className="group relative">
                <Link href={member.id === '4' ? '/didim-ozellikleri' : `/icon-temple-residence-${member.id}-1-daire`}>
                  <Image
                    src={member.image}
                    width={344}
                    height={388}
                    alt={member.title}
                    className="h-full w-full object-cover shadow-lg transition-all duration-300 group-hover:scale-105"
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

export default TeamGallery
