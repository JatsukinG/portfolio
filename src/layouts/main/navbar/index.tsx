import clsx from 'clsx'
import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'

interface Section {
  name: string
  href: string
}

const sections: Section[] = [
  {
    name: 'Home',
    href: '#home',
  }, {
    name: 'About me',
    href: '#about-me',
  }, {
    name: 'Skills',
    href: '#skills',
  }, {
    name: 'Projects',
    href: '#projects',
  },
]

const MainNavbar = () => {
  return (
      <nav>
        <div className="container py-4 flex items-center justify-between">
          <span className="uppercase font-extrabold text-purple-500">
            Portfolio
          </span>
          <div className="flex items-center gap-8">
            <ul className="list-none flex items-center gap-8">
              {
                sections.map(section => (
                    <li key={section.name}>
                      <a
                          href={section.href}
                          className={clsx([
                            'font-semibold text-sm duration-300',
                            'hover:text-purple-500',
                          ])}
                      >
                        {section.name}
                      </a>
                    </li>
                ))
              }
            </ul>
            <DarkModeToggleBtn/>
          </div>
        </div>
      </nav>
  )
}

export default MainNavbar