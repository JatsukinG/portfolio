import Skills from '@/modules/home/Skills'
import Projects from '@/modules/home/Projects'
import MainBanner from '@/modules/home/MainBanner'
import Experience from '@/modules/home/Experience'


export default function Home() {
  return (
      <>
        <MainBanner/>
        <Skills/>
        <Experience/>
        <Projects/>
      </>
  )
}
