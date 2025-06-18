import type { Params } from 'next/dist/server/request/params'
import { MdLanguage } from 'react-icons/md'
import { useParams } from 'next/navigation'
import { type Locale, useLocale } from 'use-intl'
import { routing } from '@/i18n/routing'
import { useRouter, usePathname } from '@/i18n/navigation'

type RouterReplaceParams = { pathname: string, params: Params }

const LanguageBtn = () => {
  const params = useParams()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const locales = routing.locales

  const toggleLang = (currentLocale: Locale) => {
    const index = locales.indexOf(currentLocale)
    const nextLocale = index + 1 < locales.length ? locales[index + 1] : locales[0]
    router.replace({ pathname, params } as RouterReplaceParams, { locale: nextLocale })
  }

  return (
      <button
          onClick={() => toggleLang(locale)}
          className="flex items-center gap-x-1 font-medium"
      >
        <MdLanguage/>
        {locale.toString().toUpperCase()}
      </button>
  )
}

export default LanguageBtn