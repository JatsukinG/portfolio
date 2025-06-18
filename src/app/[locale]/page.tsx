import Skills from '@/modules/home/Skills'
import Projects from '@/modules/home/Projects'
import MainBanner from '@/modules/home/MainBanner'
import Experience from '@/modules/home/Experience'


export default function Home() {
  return (
      <main className="pt-[60px]">
        <MainBanner/>
        <Skills/>
        <Experience/>
        <Projects/>
      </main>
  )
}
