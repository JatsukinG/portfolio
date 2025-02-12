import type { FC, PropsWithChildren } from 'react'
import './background1.css'


const AnimatedBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 flex flex-col">
          {children}
        </div>
        <div className="h-screen w-full bg-gray-950">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  )
}

export default AnimatedBackground