import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = { children: ReactNode; delay?: number; className?: string }

/** Envolve o conteúdo com uma animação suave de entrada ao rolar a página. */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useReveal<HTMLDivElement>(delay)
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
