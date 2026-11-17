import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { contact, gallery } from '../../data/site'
import { Button } from '../ui/Button'
import { InstagramIcon } from '../ui/icons'
import { useOverlay } from '../../hooks/useOverlay'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

/** Layout editorial: as posições alternam alturas para criar ritmo. */
const layout = [
  'col-span-2 sm:row-span-2 aspect-square',
  'aspect-[3/4]',
  'aspect-[3/4]',
  'aspect-[3/4]',
  'aspect-[3/4]',
  'col-span-2 sm:col-span-4 aspect-[16/10]',
]

function IllustrativeBadge() {
  return (
    <span className="absolute bottom-3 left-3 rounded-full bg-ivory/85 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-cocoa-soft backdrop-blur">
      Imagem ilustrativa
    </span>
  )
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const close = useCallback(() => setIndex(null), [])
  useOverlay(index !== null, close)
  const hasIllustrative = gallery.some((g) => g.illustrative)

  return (
    <section id="resultados" aria-labelledby="resultados-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="resultados-title"
          eyebrow="Portfólio"
          title="Detalhes que fazem"
          italic="a diferença."
          align="center"
          intro="Um olhar sobre o cuidado, a delicadeza e a precisão presentes em cada atendimento."
        />

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[14rem] lg:auto-rows-[17rem] sm:gap-4">
          {gallery.map((item, i) => (
            <li key={item.src} className={`${layout[i % layout.length]} sm:aspect-auto`}>
              <Reveal delay={(i % 4) * 80} className="h-full">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block h-full w-full overflow-hidden"
                  aria-label={`Ampliar imagem: ${item.caption}`}
                >
                  <SmartImage
                    src={item.thumb}
                    alt={item.alt}
                    wrapperClassName="h-full w-full"
                    className="group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-cocoa/0 transition-colors duration-500 group-hover:bg-cocoa/20" aria-hidden />
                  <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-cocoa opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                  </span>
                  {item.illustrative && <IllustrativeBadge />}
                </button>
              </Reveal>
            </li>
          ))}
        </ul>

        {contact.instagramUrl && (
          <Reveal className="mt-10 flex justify-center">
            <Button href={contact.instagramUrl} external variant="outline" icon={<InstagramIcon className="h-3.5 w-3.5" />}>
              Veja mais no Instagram
            </Button>
          </Reveal>
        )}

        {hasIllustrative && (
          <p className="mt-6 text-center text-[0.72rem] text-cocoa-soft">
            As imagens marcadas como ilustrativas não representam resultados de clientes. Em breve, fotos reais dos atendimentos.
          </p>
        )}
      </div>

      {index !== null && <Lightbox index={index} setIndex={setIndex} onClose={close} />}
    </section>
  )
}

function Lightbox({ index, setIndex, onClose }: { index: number; setIndex: (i: number) => void; onClose: () => void }) {
  const total = gallery.length
  const item = gallery[index]
  const prev = useCallback(() => setIndex((index - 1 + total) % total), [index, total, setIndex])
  const next = useCallback(() => setIndex((index + 1) % total), [index, total, setIndex])
  const [touchX, setTouchX] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada"
      className="animate-fade-in fixed inset-0 z-50 flex flex-col bg-[#2a211d]/95"
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return
        const dx = e.changedTouches[0].clientX - touchX
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
        setTouchX(null)
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-ivory/80">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Fechar"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10"
        >
          <X className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-20" onClick={onClose}>
        <figure key={item.src} className="animate-rise-in relative max-h-full" onClick={(e) => e.stopPropagation()}>
          <LightboxImage src={item.src} alt={item.alt} />
          <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center font-serif text-lg text-ivory/90 italic">
            {item.caption}
            {item.illustrative && (
              <span className="rounded-full border border-ivory/25 px-2.5 py-0.5 font-sans text-[0.55rem] tracking-[0.2em] text-ivory/70 not-italic uppercase">
                Imagem ilustrativa
              </span>
            )}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={(e) => (e.stopPropagation(), prev())}
          aria-label="Imagem anterior"
          className="absolute left-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.2} />
        </button>
        <button
          type="button"
          onClick={(e) => (e.stopPropagation(), next())}
          aria-label="Próxima imagem"
          className="absolute right-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.2} />
        </button>
      </div>
    </div>
  )
}

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  return (
    <div className="relative flex min-h-[40vh] min-w-[60vw] items-center justify-center sm:min-w-[30rem]">
      {status === 'loading' && (
        <span className="absolute h-8 w-8 animate-spin rounded-full border border-ivory/20 border-t-ivory/80" aria-label="Carregando" />
      )}
      {status === 'error' ? (
        <p className="text-sm text-ivory/70">Não foi possível carregar esta imagem.</p>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`max-h-[74vh] w-auto max-w-full object-contain transition-opacity duration-500 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}
