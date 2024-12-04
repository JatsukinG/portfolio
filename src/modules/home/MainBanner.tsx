import type { IconType } from 'react-icons'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import clsx from 'clsx'

interface Social {
  icon: IconType
  href: string
}

const socials: Social[] = [
  {
    icon: FaGithub,
    href: '',
  }, {
    icon: FaLinkedin,
    href: '',
  }, {
    icon: FaInstagram,
    href: '',
  }, {
    icon: FaWhatsapp,
    href: '',
  },
]


const MainBanner = () => {
  return (
      <header className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
              <span className="text-base font-semibold text-purple-500 block">
                +3 Years Experience
              </span>
              Hi, I&#39;m{' '}
              <span className="text-purple-500">Julian Trujillo</span>
            </h1>
            <p className="mt-4 text-xl font-bold text-red-500">Web Developer</p>

            {/* Social Buttons */}
            <div className="mt-6 flex justify-center md:justify-start space-x-2">
              {
                socials.map(({ icon: Icon, href }, i) => (
                    <a
                        key={i}
                        href={href}
                        target="_blank"
                        className={clsx([
                          'p-3 bg-gray-200 text-neutral-800 rounded-full transition',
                          'dark:bg-neutral-700 dark:text-white hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white',
                        ])}
                    >
                      <Icon/>
                    </a>
                ))
              }
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <Image
                alt="Julian Trujillo"
                src="/images/julian.png"
                width={400}
                height={400}
            />
          </div>
        </div>
      </header>
  )
}

export default MainBanner