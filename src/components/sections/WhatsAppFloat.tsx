import { useEffect, useState } from 'react'
import { whatsappLink } from '../../data/site'
import { WhatsAppIcon } from '../ui/icons'

/** Botão flutuante do WhatsApp — aparece após um pequeno scroll. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex items-center gap-2 rounded-full bg-cocoa py-3.5 pr-3.5 pl-3.5 text-ivory shadow-[0_18px_40px_-14px_rgba(89,70,63,0.7)] transition-all duration-500 ease-(--ease-soft) hover:pr-5 sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="max-w-0 overflow-hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-500 ease-(--ease-soft) group-hover:max-w-40">
        Fale comigo
      </span>
    </a>
  )
}
