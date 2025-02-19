import clsx from 'clsx'

interface Item {
  year: number;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    year: 2024,
    title: 'Desarrollador Freelance',
    description: 'Como desarrollador freelance, he trabajado en la creación de sitios web y aplicaciones personalizadas para pequeñas empresas. Mi experiencia incluye el uso de tecnologías como React, Next.js para frontend, y Django para backend, siempre priorizando soluciones adaptadas a las necesidades de mis clientes.',
  },
  {
    year: 2021,
    title: 'Inicio en Desarrollo Web',
    description: 'En este año descubrí mi pasión por el desarrollo web. Aprendí a programar y realicé mis primeros proyectos personales utilizando tecnologías como HTML, CSS y JavaScript, sentando las bases para mi carrera en tecnología.',
  },
  {
    year: 2018,
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

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute h-full w-1 bg-gray-300 dark:bg-neutral-600 left-5 md:left-10 -translate-x-1/2"/>
            <ul className="space-y-8">
              {items.map((item) => (
                  <li key={item.year} className="relative pl-10 md:pl-16">
                    <span
                        className={clsx([
                          'absolute left-0 md:left-5 size-10 rounded-full flex items-center justify-center',
                          'bg-purple-500 text-xs text-white font-bold',
                        ])}
                    >
                      {item.year}
                    </span>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">{item.description}</p>
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