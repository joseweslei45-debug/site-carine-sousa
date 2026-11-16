import { Quote } from 'lucide-react'
import { rating, testimonials } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Stars } from '../ui/icons'

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="depoimentos-title" eyebrow="Depoimentos" title="Palavras de quem" italic="confia." />

          <Reveal delay={100} className="flex items-center gap-5">
            <p className="display text-6xl">{rating.value}</p>
            <div>
              <Stars className="h-4 w-4" />
              <p className="mt-2 text-[0.72rem] tracking-wide text-cocoa-soft">
                Baseado em {rating.count} avaliações
              </p>
            </div>
            <span className="sr-only">
              Nota {rating.value} de 5, com base em {rating.count} avaliações
            </span>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-5">
          {testimonials.map((t, i) => (
            <li key={t.name} className={i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <Reveal delay={i * 120} className="h-full">
                <figure
                  className={`flex h-full flex-col justify-between rounded-3xl p-8 sm:p-11 ${
                    i === 0 ? 'bg-cocoa text-ivory' : 'border border-cocoa/10 bg-white text-cocoa'
                  }`}
                >
                  <div>
                    <Quote className={`h-7 w-7 ${i === 0 ? 'text-blush' : 'text-gold'}`} strokeWidth={1} aria-hidden />
                    <blockquote
                      className={`mt-6 font-serif leading-snug font-light ${
                        i === 0 ? 'text-[1.45rem] sm:text-[1.75rem]' : 'text-[1.35rem] sm:text-[1.5rem]'
                      }`}
                    >
                      “{t.text}”
                    </blockquote>
                  </div>
                  <figcaption className={`mt-10 flex items-center justify-between border-t pt-6 ${i === 0 ? 'border-ivory/15' : 'border-cocoa/10'}`}>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em]">{t.name}</span>
                    <Stars className="h-3 w-3" />
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
