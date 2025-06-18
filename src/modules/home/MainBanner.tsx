import type { IconType } from 'react-icons'
import type { UseTranslationArg } from '@/constants/types'
import Image from 'next/image'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

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
  const t = useTranslations('homepage' as UseTranslationArg)
  return (
      <header id="home" className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
              <span className="text-base font-semibold text-purple-500 block">
                {t('experience')}
              </span>
              <span className="mt-1 block">
                {t('greeting')}&nbsp;
                <span className="inline relative">
                  <span className="text-nowrap text-purple-500">
                    Julian Trujillo
                  </span>
                  <span className="absolute left-0 text-nowrap animate-text-path text-red-500">
                    Julian Trujillo
                  </span>
                </span>
              </span>
            </h1>
            <p className="mt-4 text-xl font-bold text-red-500">{t('profession')}</p>
            <p className="mt-4 text-base md:text-lg text-pretty">
              {t('description')}
            </p>

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

          <div className="relative flex justify-center md:justify-end">
            <Image
                priority
                alt="Julian Trujillo"
                src="/images/julian.png"
                width={400}
                height={400}
                className="relative animate-floating"
            />
          </div>
        </div>
      </header>
  )
}

export default MainBanner