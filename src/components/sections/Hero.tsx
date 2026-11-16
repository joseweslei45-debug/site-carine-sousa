import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { brand, contact, images, rating } from '../../data/site'
import { Button } from '../ui/Button'
import { SmartImage } from '../ui/SmartImage'
import { Stars } from '../ui/icons'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Fundo: bloco bege que ancora a composição */}
      <div aria-hidden className="absolute top-0 right-0 hidden h-full w-[38%] bg-sand/60 lg:block" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Texto */}
        <div className="lg:col-span-6 lg:pr-6">
          <div className="animate-rise-in">
            <p className="eyebrow">
              {brand.name} <span className="mx-2 text-blush">·</span> {brand.tagline}
            </p>
          </div>

          <h1 id="hero-title" className="display animate-rise-in mt-7 text-[3.1rem] [animation-delay:120ms] sm:text-7xl lg:text-[5.4rem]">
            Sua beleza,
            <br />
            em sua <em className="font-normal italic text-gold">melhor</em>
            <br className="hidden sm:block" /> versão.
          </h1>

          <p className="animate-rise-in mt-7 max-w-md text-[0.98rem] leading-relaxed text-cocoa-soft [animation-delay:240ms]">
            Realçando sua beleza natural através de técnicas especializadas, cuidado e atenção a cada detalhe.
          </p>

          <div className="animate-rise-in mt-10 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center sm:gap-4">
            <Button href="#procedimentos" variant="primary" icon={<ArrowDown className="h-3.5 w-3.5" />}>
              Conheça os procedimentos
            </Button>
            <Button href={contact.bookingUrl} external variant="outline" icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
              Agende seu horário
            </Button>
          </div>

          <div className="animate-fade-in mt-12 flex items-center gap-4 [animation-delay:600ms]">
            <Stars />
            <p className="text-[0.75rem] tracking-wide text-cocoa-soft">
              <strong className="font-semibold text-cocoa">{rating.value}</strong> · {rating.count} avaliações de clientes
            </p>
          </div>
        </div>

        {/* Composição editorial */}
        <div className="relative lg:col-span-6">
          <div className="animate-fade-in relative ml-auto w-[88%] sm:w-[78%] lg:w-[86%]">
            <SmartImage
              src={images.hero.src}
              alt={images.hero.alt}
              priority
              wrapperClassName="aspect-[4/5] rounded-t-full"
              className="scale-[1.02]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            {/* Selo */}
            <p className="mt-4 text-right text-[0.6rem] uppercase tracking-[0.4em] text-cocoa-soft">Quixadá — Ceará</p>
          </div>

          {/* Detalhe sobreposto */}
          <div className="animate-rise-in absolute bottom-[-6%] left-0 w-[40%] [animation-delay:500ms] sm:w-[34%]">
            <div className="border-[6px] border-ivory shadow-[0_25px_50px_-20px_rgba(89,70,63,0.35)]">
              <SmartImage src={images.heroDetail.src} alt={images.heroDetail.alt} priority wrapperClassName="aspect-square" />
            </div>
            <p className="mt-3 font-serif text-sm italic text-cocoa-soft">Cada detalhe importa.</p>
          </div>

          {/* Marca tipográfica */}
          <span aria-hidden className="pointer-events-none absolute -top-6 left-[4%] font-serif text-[7rem] leading-none text-blush/40 italic select-none sm:text-[9rem]">
            &
          </span>
        </div>
      </div>

    </section>
  )
}
