'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import BurgerButton from '@/layouts/main/navbar/BurgerButton'
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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
      <>
        <header
            className={clsx([
              isOpen && 'max-md:bg-transparent',
              'bg-neutral-50/70 dark:bg-neutral-900/70',
              'z-50 sticky top-0 left-0 w-full backdrop-blur-xl',
            ])}
        >
          <div className="container py-4 flex items-center gap-8 justify-between">
            <span className="uppercase font-extrabold text-purple-500">
              Portfolio
            </span>

            {/*Desktop version*/}
            <nav className="max-md:hidden flex flex-row gap-8 items-center">
              {
                sections.map(section => (
                    <a
                        key={section.name}
                        href={section.href}
                        onClick={() => isOpen && toggle()}
                        className={clsx([
                          'font-semibold text-sm text-center duration-300',
                          'hover:text-purple-500 active:text-purple-400',
                        ])}
                    >
                      {section.name}
                    </a>
                ))
              }
            </nav>

            <div className="flex items-center gap-2">
              <DarkModeToggleBtn/>
              <BurgerButton
                  isActive={isOpen}
                  className="md:hidden"
                  onClick={() => toggle()}
              />
            </div>
          </div>
        </header>

        {/*Mobile version*/}
        <nav
            className={clsx([
              !isOpen ? '[clip-path:circle(0%_at_100%_0)]' : '[clip-path:circle(100%)]',
              'md:hidden flex flex-col justify-center items-center transition-all duration-500',
              'z-40 fixed inset-0 backdrop-blur-xl bg-purple-50/70 dark:bg-neutral-900/70',
            ])}
        >
          {
            sections.map(section => (
                <a
                    key={section.name}
                    href={section.href}
                    className={clsx([
                      'relative w-full font-semibold text-xl p-4 text-center duration-300',
                      'hover:text-purple-500 active:text-purple-400',
                    ])}
                    onClick={() => isOpen && toggle()}
                >
                  {section.name}
                </a>
            ))
          }
        </nav>
      </>
  )
}

export default MainNavbar