import Skills from '@/modules/home/Skills'
import AboutMe from '@/modules/home/AboutMe'
import Projects from '@/modules/home/Projects'
import MainBanner from '@/modules/home/MainBanner'

export default function Home() {
  return (
      <>
        <MainBanner/>
        <Skills/>
        <AboutMe/>
        <Projects/>
      </>
  )
}
