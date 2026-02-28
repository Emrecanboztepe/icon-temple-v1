import topArrow from '@/public/images/icons/arrow-Icon.svg'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface projectType {
  slug: string
  content: string
  [key: string]: any
}

const loadedProject: projectType[] = getMarkDownData('data/agency-projects')
const sorted = loadedProject.filter((project) => !project.category)
const projects = sorted.toSorted((a, b) => b.title - a.title)

const PersonalProjects = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-center md:mb-20 md:flex-row md:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1">
              Seçili Portföy & <i className="font-instrument">Yaşam Alanları</i>
            </h2>
          </TextAppearAnimation>
          <div>
            <TextAppearAnimation>
              <p className="max-w-md flex-1 md:self-end md:text-right">
                Didim'in eşsiz doğasını modern mimariyle birleştiren, her detayı konforunuz için tasarlanmış seçkin projelerimizi keşfedin. Estetik ve yatırım değerinin buluştuğu noktadasınız.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See More projects</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See More projects</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="[&>*:not(:last-child)]:mb-[30px]">
          {projects.map((project) => (
            <RevealWrapper as="article" className="reveal-me group relative" key={project.slug}>
              <div className="block overflow-hidden">
                <Image
                  width={1330}
                  height={445}
                  src={project.thumbnail}
                  alt={project.alt}
                  className="transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-backgroundBody p-2 sm:p-3 md:bottom-10 md:left-10 md:right-auto md:max-w-[535px] md:p-[30px]">
                <div className="project-title mb-1 md:mb-5">
                  <h3 className="text-lg font-normal text-secondary dark:text-secondary md:text-[24px] lg:text-5xl lg:leading-[1.2]">
                    {project.title}
                  </h3>
                </div>
                <p className="line-clamp-1 text-xs text-secondary dark:text-secondary md:line-clamp-none md:text-base">
                  {project.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
