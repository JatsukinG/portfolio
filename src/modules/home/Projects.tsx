import clsx from 'clsx'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My personal portfolio built with Next.js and TailwindCSS.',
    tags: ['Next.js', 'TailwindCSS', 'React'],
    image: '/images/banner.jpg',
    link: 'https://my-portfolio.com',
  },
  {
    id: 2,
    title: 'Task Manager',
    description:
        'A task management app with authentication and multi-user support.',
    tags: ['React', 'Firebase', 'Material UI'],
    image: '/images/banner.jpg',
    link: 'https://task-manager.com',
  },
  {
    id: 3,
    title: 'E-commerce Demo',
    description: 'E-commerce website with integrated payment gateway.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    image: '/images/banner.jpg',
    link: 'https://ecommerce-demo.com',
  },
  {
    id: 4,
    title: 'E-commerce Demo',
    description: 'E-commerce website with integrated payment gateway.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    image: '/images/banner.jpg',
    link: 'https://ecommerce-demo.com',
  },
]

const Projects = () => {
  return (
      <section id="projects" className="py-16">
        <div className="container">
          <h2 className="mb-24 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={clsx(
                        'bg-white dark:bg-neutral-700 shadow-lg rounded-lg overflow-hidden',
                        'transition-transform transform hover:scale-105 flex flex-col',
                    )}
                >
                  {/* Project Image */}
                  <div className="w-full relative">
                    <Image
                        alt={project.title}
                        src={project.image}
                        sizes="100vw" width={0} height={0}
                        className="w-full aspect-video object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                          <span
                              key={index}
                              className={clsx(
                                  'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-50',
                                  'text-xs font-bold px-3 py-1 rounded-full',
                              )}
                          >
                            {tag}
                          </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                          'text-sm text-purple-500 dark:text-purple-300 p-4 font-bold',
                          'hover:underline',
                      )}
                  >
                    View Project &rarr;
                  </a>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects