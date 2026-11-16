import { ArrowUp } from 'lucide-react'
import { brand, contact, navLinks, whatsappLink } from '../../data/site'
import { InstagramIcon, Monogram, WhatsAppIcon } from '../ui/icons'

export function Footer() {
  const year = new Date().getFullYear()
  const { address } = contact

  return (
    <footer className="mt-24 border-t border-cocoa/10 bg-sand/40 pt-20 pb-28 sm:mt-32 sm:pb-12">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-cocoa">
              <Monogram className="h-11 w-11 text-lg" />
              <div>
                <p className="font-serif text-2xl">{brand.name}</p>
                <p className="mt-1 text-[0.58rem] uppercase tracking-[0.3em] text-cocoa-soft">{brand.tagline}</p>
              </div>
            </div>
            <p className="mt-7 max-w-sm font-serif text-lg leading-snug text-cocoa-soft italic">{brand.footerText}</p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cocoa transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cocoa transition-colors hover:text-gold">
                  Agendamento
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow">Contato</p>
            <address className="mt-5 space-y-3 text-sm leading-relaxed text-cocoa not-italic">
              <p>
                {address.street} — {address.district}
                <br />
                {address.city} — {address.state}, {address.zip}
              </p>
              <p>
                <a href={`tel:${contact.phoneE164}`} className="transition-colors hover:text-gold">
                  {contact.phoneDisplay}
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:border-cocoa hover:bg-cocoa hover:text-ivory"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:border-cocoa hover:bg-cocoa hover:text-ivory"
                >
                  <InstagramIcon />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-cocoa/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.72rem] text-cocoa-soft">
            © {year} {brand.name} — {brand.tagline}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.25em] text-cocoa-soft transition-colors hover:text-cocoa">
            Voltar ao topo <ArrowUp className="h-3 w-3" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
