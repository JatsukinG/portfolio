import type { IconType } from 'react-icons'
import clsx from 'clsx'
import { FaCalculator, FaChalkboardTeacher, FaCode, FaFutbol, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

interface Item {
  year: string;
  title: string;
  description: string;
  icon: IconType
  items: string[]
}

const items: Item[] = [
  {
    year: '2022 - Present',
    title: 'Grupo N1 S.A.S',
    description: 'Desarrollo de una herramienta web para automatizar la causación de facturas electrónicas mediante IA.',
    icon: FaCalculator,
    items: [
      'Creación y mantenimiento de una herramienta para contadores',
      'Extracción automática de información de facturas',
      'Causación en sistemas contables con inteligencia artificial',
      'Metodologías ágiles (Scrum)',
      'Tecnologías: React, Next.js, Django, PostgreSQL, Docker, FastAPI, Flask',
    ],
  },
  {
    year: '2024 - Present',
    title: 'Mentor de estudiantes',
    description: 'Voluntario en fundación enseñando desarrollo web a estudiantes de distintas edades.',
    icon: FaChalkboardTeacher,
    items: [
      'Apoyo en procesos de formación en desarrollo web',
      'Enseñanza de HTML, CSS y JavaScript desde nivel básico',
      'Introducción a React.js como framework de frontend',
    ],
  },
  {
    year: '2023 - Present',
    title: 'Desarrollador Freelance',
    description: 'Diseño y desarrollo de sitios y aplicaciones web para diversos clientes.',
    icon: FaLaptopCode,
    items: [
      'Creación de landing pages con Next.js',
      'Desarrollo de aplicaciones web completas con React.js',
      'Backend con Django y PostgreSQL',
    ],
  },
  {
    year: '2021',
    title: 'Prospect 1',
    description: 'Mantenimiento de una plataforma de estadísticas para jugadores de fútbol.',
    icon: FaFutbol,
    items: [
      'Actualización y soporte a plataforma de seguimiento de jugadores',
      'Gestión de datos y generación de prospectos para reclutamiento',
      'Tecnologías: React, Node.js con Express, MySQL, MongoDB',
    ],
  },
  {
    year: '2020',
    title: 'Inicio en Desarrollo Web',
    description: 'Primeros pasos en programación y desarrollo de proyectos personales.',
    icon: FaCode,
    items: [
      'Aprendizaje autodidacta en desarrollo web',
      'Proyectos personales con HTML, CSS y JavaScript',
      'Introducción a React.js',
    ],
  },
  {
    year: '2018',
    title: 'Inicios Académicos',
    description: 'Primeros acercamientos a la programación durante la carrera universitaria.',
    icon: FaGraduationCap,
    items: [
      'Estudios en Ingeniería Mecatrónica',
      'Programación en C y Python',
      'Creación de scripts para Arduino',
      'Desarrollo de pensamiento lógico y resolución de problemas',
    ],
  },
]


const Experience = () => {
  return (
      <section id="about-me">
        <div className="py-16 container">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Experience
          </h2>

          <div className="relative mx-auto">
            <ul className="space-y-8">
              {
                items.map((item, i) => {
                  const Icon = item.icon
                  return (
                      <li key={i}
                          className="relative flex md:items-center flex-col md:flex-row md:odd:flex-row-reverse gap-4 md:gap-12"
                      >
                        <div
                            className={clsx([
                              'shrink-0 w-24 h-24 rounded-full grid place-items-center text-white text-4xl',
                              'bg-gradient-to-tr from-purple-500 to-red-500 from-40%',
                            ])}
                        >
                          <Icon/>
                        </div>

                        <div
                            className={clsx([
                              i % 2 ? 'border-l-4' : 'border-r-4',
                              'border relative p-4 bg-white/5 backdrop-blur-sm rounded-lg border-purple-500 shadow-lg',
                            ])}
                        >
                          <h3 className="font-bold text-purple-500">{item.year}</h3>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{item.description}</p>

                          <ul className="mt-3 list-disc pl-8">
                            {item.items.map(elem => (
                                <li key={elem}>
                                  {elem}
                                </li>
                            ))}
                          </ul>
                        </div>

                      </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Experience