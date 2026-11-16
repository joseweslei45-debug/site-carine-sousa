import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'light' | 'outlineLight'

const styles: Record<Variant, string> = {
  primary: 'border border-cocoa bg-cocoa text-ivory hover:bg-[#4a3a34] px-6 py-3.5',
  outline: 'border border-cocoa/25 text-cocoa hover:border-cocoa hover:bg-cocoa hover:text-ivory px-6 py-3.5',
  light: 'border border-ivory bg-ivory text-cocoa hover:bg-white px-6 py-3.5',
  outlineLight: 'border border-ivory/35 text-ivory hover:bg-ivory hover:text-cocoa px-6 py-3.5',
  ghost: 'border-b border-cocoa/25 pb-1 text-cocoa hover:border-gold hover:text-gold',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  icon?: ReactNode
  external?: boolean
}

/** Botão em forma de link. Links externos abrem em nova aba com segurança. */
export function Button({ variant = 'primary', icon, external, className = '', children, ...rest }: Props) {
  const shape = variant === 'ghost' ? '' : 'rounded-full'
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-(--ease-soft) active:scale-[0.98] ${shape} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && (
        <span className="inline-flex transition-transform duration-500 ease-(--ease-soft) group-hover:translate-x-0.5" aria-hidden>
          {icon}
        </span>
      )}
    </a>
  )
}
