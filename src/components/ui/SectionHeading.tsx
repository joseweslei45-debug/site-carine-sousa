import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  italic?: string
  intro?: string
  align?: 'left' | 'center'
  light?: boolean
  id?: string
}

/** Título de seção: eyebrow + título serifado com trecho opcional em itálico. */
export function SectionHeading({ eyebrow, title, italic, intro, align = 'left', light, id }: Props) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <p className={`eyebrow flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gold/60" aria-hidden />
        {eyebrow}
      </p>
      <h2 id={id} className={`display mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.5rem] ${light ? 'text-ivory!' : ''}`}>
        {title}
        {italic && (
          <>
            {' '}
            <em className="font-normal italic text-gold">{italic}</em>
          </>
        )}
      </h2>
      {intro && (
        <p className={`mt-6 text-[0.95rem] leading-relaxed ${light ? 'text-ivory/75' : 'text-cocoa-soft'} ${center ? 'mx-auto max-w-lg' : ''}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
