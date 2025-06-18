import { defineRouting, type RoutingConfig } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
} as RoutingConfig<never, never, never, never>)