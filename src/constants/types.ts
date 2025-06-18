import { Messages, NamespaceKeys, NestedKeyOf } from 'next-intl'

export type UseTranslationArg = NamespaceKeys<Messages, NestedKeyOf<Messages>>