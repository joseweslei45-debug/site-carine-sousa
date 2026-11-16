import { useCallback, useState } from 'react'
import { ArrowUpRight, Check, Plus, X } from 'lucide-react'
import { contact, services, whatsappLink, type Service } from '../../data/site'
import { useOverlay } from '../../hooks/useOverlay'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

export function Services() {
  const [active, setActive] = useState<Service | null>(null)
  const close = useCallback(() => setActive(null), [])
  useOverlay(!!active, close)

  return (
    <section id="procedimentos" aria-labelledby="procedimentos-title" className="bg-white/60 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="procedimentos-title"
            eyebrow="Procedimentos"
            title="Cuidados pensados"
            italic="para você."
            intro="Conheça os procedimentos e escolha o cuidado ideal para o seu momento."
          />
          <Reveal delay={100}>
            <Button href={contact.bookingUrl} external variant="ghost" icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
              Ver horários disponíveis
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i * 90} className="group flex h-full flex-col">
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="relative block w-full overflow-hidden text-left"
                  aria-label={`Saiba mais sobre ${s.name}`}
                >
                  <SmartImage
                    src={s.image.src}
                    alt={s.image.alt}
                    wrapperClassName="aspect-[4/3] sm:aspect-[3/4]"
                    className="group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 font-serif text-sm text-ivory italic drop-shadow">0{i + 1}</span>
                </button>

                <h3 className="mt-6 font-serif text-[1.6rem] leading-tight font-normal text-cocoa">{s.name}</h3>
                <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-cocoa-soft">{s.short}</p>
                {s.price && <p className="mt-3 text-sm font-medium text-cocoa">{s.price}</p>}

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-cocoa/10 pt-5">
                  <button
                    type="button"
                    onClick={() => setActive(s)}
                    className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-cocoa transition-colors hover:text-gold"
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden /> Saiba mais
                  </button>
                  <a
                    href={contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Agendar ${s.name}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cocoa px-4 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-[#4a3a34]"
                  >
                    Agendar <ArrowUpRight className="h-3 w-3" aria-hidden />
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {active && <ServiceModal service={active} onClose={close} />}
    </section>
  )
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="service-modal-title" className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div className="animate-fade-in absolute inset-0 bg-cocoa/40 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-rise-in relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-ivory sm:rounded-3xl md:grid-cols-2">
        <SmartImage src={service.image.src} alt={service.image.alt} wrapperClassName="aspect-[16/10] md:aspect-auto md:h-full" />
        <div className="p-7 sm:p-10">
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Fechar"
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-cocoa transition-colors hover:bg-sand"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <p className="eyebrow">Procedimento</p>
          <h3 id="service-modal-title" className="display mt-4 text-4xl">
            {service.name}
          </h3>
          <p className="mt-5 text-[0.92rem] leading-relaxed text-cocoa-soft">{service.description}</p>
          <ul className="mt-6 space-y-3">
            {service.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[0.88rem] text-cocoa">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
                {d}
              </li>
            ))}
          </ul>
          {(service.price || service.duration) && (
            <dl className="mt-6 flex gap-8 border-t border-cocoa/10 pt-5 text-sm">
              {service.price && (
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-cocoa-soft">Valor</dt>
                  <dd className="mt-1 text-cocoa">{service.price}</dd>
                </div>
              )}
              {service.duration && (
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-cocoa-soft">Duração</dt>
                  <dd className="mt-1 text-cocoa">{service.duration}</dd>
                </div>
              )}
            </dl>
          )}
          <p className="mt-6 text-[0.78rem] leading-relaxed text-cocoa-soft">
            Valores e detalhes de cada procedimento são informados no agendamento ou pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contact.bookingUrl} external icon={<ArrowUpRight className="h-3.5 w-3.5" />}>
              Agendar
            </Button>
            <Button href={whatsappLink(`Olá, Carine! Gostaria de saber mais sobre ${service.name}.`)} external variant="outline">
              Tirar dúvidas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
