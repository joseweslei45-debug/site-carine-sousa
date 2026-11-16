import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { brand, contact, navLinks, whatsappLink } from '../../data/site'
import { useOverlay } from '../../hooks/useOverlay'
import { Monogram, WhatsAppIcon } from '../ui/icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  useOverlay(open, close)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-(--ease-soft) ${
          scrolled ? 'border-b border-cocoa/8 bg-ivory/85 py-3 backdrop-blur-md' : 'py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3 text-cocoa" aria-label={`${brand.name} — início`}>
            <Monogram />
            <span className="leading-none">
              <span className="block font-serif text-[1.35rem] tracking-wide">{brand.name}</span>
              <span className="mt-1 hidden text-[0.55rem] uppercase tracking-[0.3em] text-cocoa-soft sm:block">{brand.tagline}</span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-9">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative text-[0.68rem] uppercase tracking-[0.16em] text-cocoa/80 xl:text-[0.72rem] xl:tracking-[0.18em] transition-colors hover:text-cocoa after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-cocoa/25 px-5 py-2.5 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-cocoa transition-all duration-500 hover:border-cocoa hover:bg-cocoa hover:text-ivory sm:inline-flex"
            >
              Agendar
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-sand lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 lg:hidden">
          <div className="animate-fade-in absolute inset-0 bg-cocoa/30 backdrop-blur-sm" onClick={close} />
          <div className="animate-rise-in absolute inset-x-3 top-3 rounded-3xl bg-ivory p-6 shadow-[0_30px_80px_-30px_rgba(89,70,63,0.5)]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-cocoa">
                <Monogram />
                <span className="font-serif text-xl">{brand.name}</span>
              </span>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-sand"
                aria-label="Fechar menu"
                autoFocus
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <nav aria-label="Navegação mobile" className="mt-6">
              <ul className="divide-y divide-cocoa/10 border-y border-cocoa/10">
                {navLinks.map((l, i) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={close}
                      className="flex items-baseline justify-between py-4 font-serif text-[1.7rem] font-light text-cocoa"
                    >
                      {l.label}
                      <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold">0{i + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 grid gap-2.5">
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cocoa py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory"
              >
                Agendar meu horário <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/25 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cocoa"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
