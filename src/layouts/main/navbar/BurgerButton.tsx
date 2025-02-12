import type { FC } from 'react'
import clsx from 'clsx'

interface Props {
  isActive: boolean
  onClick: () => void
  className?: string
}


const BurgerButton: FC<Props> = ({ isActive, className, onClick }) => {
  return (
      <button
          onClick={onClick}
          className={clsx([
            'relative p-2 flex flex-col justify-between items-center gap-1 group',
            className,
          ])}
      >
        <span
            className={clsx([
              'block w-6 h-1 bg-neutral-500 rounded transition-transform duration-300',
              isActive ? 'rotate-45 translate-y-2' : '',
            ])}
        />
        <span
            className={clsx([
              'block w-6 h-1 bg-neutral-500 rounded transition-opacity duration-300',
              isActive ? 'opacity-0' : '',
            ])}
        />
        <span
            className={clsx([
              'block w-6 h-1 bg-neutral-500 rounded transition-transform duration-300',
              isActive ? '-rotate-45 -translate-y-2' : '',
            ])}
        />
      </button>
  )
}

export default BurgerButton
