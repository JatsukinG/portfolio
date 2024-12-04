const AboutMe = () => {
  return (
      <section className="py-16" id="about-me">
        <div className="container">
          <h2 className="mb-24 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Acerca de mí
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Text Section */}
            <div className="md:col-span-5 text-gray-700 dark:text-gray-300">
              <p className="mb-6 leading-relaxed">
                Soy <span className="text-purple-500 font-bold">Julian Trujillo</span>, un
                desarrollador web apasionado por crear aplicaciones modernas y
                efectivas. Mi trayecto profesional refleja una evolución constante en
                tecnologías de desarrollo frontend y backend.
              </p>
              <p className="mb-6 leading-relaxed">
                Disfruto aprender nuevas herramientas y enfrentar desafíos que me permitan
                crecer como profesional. Aquí está una breve historia de mi carrera:
              </p>
            </div>

            {/* Timeline Section */}
            <div className="md:col-span-7">
              <div className="relative">
                <div className="absolute h-full w-1 bg-gray-300 dark:bg-gray-600 left-4 md:left-8"></div>
                <ul className="space-y-8">
                  {/* Timeline Item 1 */}
                  <li className="relative pl-10 md:pl-16">
                    <span
                        className="absolute left-0 md:left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      2022
                    </span>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Desarrollador Freelance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Creación de sitios web y aplicaciones personalizados para
                        pequeñas empresas.
                      </p>
                    </div>
                  </li>

                  {/* Timeline Item 2 */}
                  <li className="relative pl-10 md:pl-16">
                    <span
                        className="absolute left-0 md:left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      2021
                    </span>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Intern en Desarrollo Web
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Participación en proyectos de frontend con React y backend en
                        Node.js.
                      </p>
                    </div>
                  </li>

                  {/* Timeline Item 3 */}
                  <li className="relative pl-10 md:pl-16">
                    <span
                        className="absolute left-0 md:left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      2018
                    </span>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Comienzo de mi Carrera
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Aprendí a programar y creé mis primeros proyectos personales
                        usando HTML, CSS y JavaScript.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe