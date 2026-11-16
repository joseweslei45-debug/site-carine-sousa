import { useEffect, useState } from 'react'
import { MapPin, Navigation, Phone, Signpost } from 'lucide-react'
import { brand, contact, mapsDirectionsUrl, mapsEmbedUrl } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Location() {
  const { address } = contact
  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="localizacao-title" eyebrow="Localização" title="Estamos esperando" italic="por você." />

          <Reveal delay={120}>
            <address className="mt-12 space-y-7 not-italic">
              <p className="font-serif text-2xl text-cocoa">
                {brand.name} <span className="block text-base text-cocoa-soft italic">{brand.tagline}</span>
              </p>

              <InfoRow icon={<MapPin className="h-4 w-4" strokeWidth={1.3} />} label="Endereço">
                {address.street} — {address.district}
                <br />
                {address.city} — {address.state}, {address.zip}
              </InfoRow>

              <InfoRow icon={<Signpost className="h-4 w-4" strokeWidth={1.3} />} label="Referência">
                {address.reference}
              </InfoRow>

              <InfoRow icon={<Phone className="h-4 w-4" strokeWidth={1.3} />} label="Telefone / WhatsApp">
                <a href={`tel:${contact.phoneE164}`} className="transition-colors hover:text-gold">
                  {contact.phoneDisplay}
                </a>
              </InfoRow>
            </address>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={mapsDirectionsUrl} external icon={<Navigation className="h-3.5 w-3.5" />}>
                Abrir rotas
              </Button>
              <Button href={`tel:${contact.phoneE164}`} variant="outline">
                Ligar agora
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-cocoa-soft">{label}</p>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-cocoa">{children}</p>
      </div>
    </div>
  )
}

/** Mapa do Google com estado de carregamento e alternativa caso não carregue. */
function MapEmbed() {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'timeout'>('loading')

  useEffect(() => {
    if (status !== 'loading') return
    const t = window.setTimeout(() => setStatus('timeout'), 12000)
    return () => window.clearTimeout(t)
  }, [status])

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-cocoa/10 bg-sand sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[32rem]">
      {status !== 'loaded' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          {status === 'loading' ? (
            <>
              <span className="h-7 w-7 animate-spin rounded-full border border-cocoa/15 border-t-cocoa/60" aria-hidden />
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-cocoa-soft">Carregando mapa</p>
            </>
          ) : (
            <>
              <MapPin className="h-6 w-6 text-gold" strokeWidth={1.2} aria-hidden />
              <p className="max-w-xs text-sm text-cocoa-soft">O mapa está demorando para carregar. Você pode abrir a localização diretamente no Google Maps.</p>
              <Button href={mapsDirectionsUrl} external variant="outline">
                Abrir no Google Maps
              </Button>
            </>
          )}
        </div>
      )}
      <iframe
        title={`Mapa: ${brand.name}, ${contact.address.street}, ${contact.address.city}`}
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setStatus('loaded')}
        className={`absolute inset-0 h-full w-full border-0 grayscale-[0.35] sepia-[0.15] transition-opacity duration-700 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        allowFullScreen
      />
    </div>
  )
}
