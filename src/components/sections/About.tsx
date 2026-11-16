import { ArrowUpRight } from 'lucide-react'
import { brand, contact, images } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SmartImage } from '../ui/SmartImage'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div aria-hidden className="absolute -top-5 -left-5 h-full w-full border border-gold/40" />
            <SmartImage
              src={images.about.src}
              alt={images.about.alt}
              wrapperClassName="relative aspect-[3/4]"
              className="sepia-[0.25]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" aria-hidden />
              Sobre a profissional
            </p>
            <h2 id="sobre-title" className="display mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.5rem]">
              Beleza que valoriza <em className="font-normal italic text-gold">sua essência.</em>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-10 border-l border-gold/50 pl-6 font-serif text-[1.45rem] leading-snug font-light text-cocoa sm:text-[1.7rem]">
              “Cada rosto possui sua própria beleza e merece um cuidado especial.”
            </blockquote>
            <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-cocoa-soft">
              Meu trabalho é dedicado a valorizar seus traços naturais, respeitando sua individualidade e proporcionando uma
              experiência de cuidado, autoestima e confiança.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div>
              <p className="font-serif text-3xl text-cocoa italic">{brand.name}</p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-cocoa-soft">{brand.tagline}</p>
            </div>
            <Button href={contact.bookingUrl} external variant="ghost" icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
              Agende seu horário
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
