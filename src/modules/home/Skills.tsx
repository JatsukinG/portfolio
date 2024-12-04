import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiFirebase } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: FaGitAlt },
]

const Skills = () => {
  return (
      <section id="skills" className="py-16">
        <div className="container">
          <h2 className="mb-24 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                  <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-white dark:bg-neutral-700 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                  >
                    <Icon className="text-4xl text-purple-500 mb-2"/>
                    <p className="text-neutral-800 dark:text-neutral-200 font-semibold">{skill.name}</p>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Skills