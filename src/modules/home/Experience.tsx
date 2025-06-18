import clsx from 'clsx'
import { FaUniversity } from 'react-icons/fa'

interface Item {
  year: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    year: '2024 - Present',
    title: 'Desarrollador Freelance',
    description: 'Como desarrollador freelance, he trabajado en la creación de sitios web y aplicaciones personalizadas para pequeñas empresas. Mi experiencia incluye el uso de tecnologías como React, Next.js para frontend, y Django para backend, siempre priorizando soluciones adaptadas a las necesidades de mis clientes.',
  },
  {
    year: '2021',
    title: 'Inicio en Desarrollo Web',
    description: 'En este año descubrí mi pasión por el desarrollo web. Aprendí a programar y realicé mis primeros proyectos personales utilizando tecnologías como HTML, CSS y JavaScript, sentando las bases para mi carrera en tecnología.',
  },
  {
    year: '2018',
    title: 'Inicios Académicos',
    description: 'Durante mi formación en Ingeniería Mecatrónica, desarrollé habilidades en programación utilizando lenguajes como C y Python. Además, exploré la creación de scripts para Arduino, lo que despertó mi interés por la resolución de problemas a través del código.',
  },
]


const Experience = () => {
  return (
      <section className="bg-purple-50/70 backdrop-blur-sm dark:bg-purple-50/5" id="about-me">
        <div className="py-16 container">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Experience
          </h2>

          <div className="relative mx-auto">
            <ul className="space-y-8">
              {items.map((item, i) => (
                  <li key={item.year} className="relative flex items-center flex-row odd:flex-row-reverse gap-4 md:gap-12">
                    <span className="-z-10 block absolute top-1/2 -translate-y-1/2 w-full h-2 bg-purple-500"/>
                    <span
                        className={clsx([
                          '-z-10 block absolute translate-y-1/2 w-2 h-full bg-purple-500',
                          i % 2 ? 'left-12 -translate-x-1/2' : 'right-12 translate-x-1/2',
                          i === items.length - 1 && 'hidden',
                        ])}
                    />


                    <div
                        className="shrink-0 w-24 h-24 rounded-full bg-purple-500 grid place-items-center text-white text-4xl"
                    >
                      <FaUniversity/>
                    </div>


                    <div
                        className={clsx([
                          i % 2 ? 'border-l-4' : 'border-r-4',
                          'relative p-4 bg-white dark:bg-neutral-700 rounded-lg border-purple-500 shadow-lg',
                        ])}
                    >
                      <h3 className="font-bold text-purple-500">{item.year}</h3>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="mt-3 text-neutral-600 dark:text-neutral-300">{item.description}</p>
                    </div>

                  </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Experience