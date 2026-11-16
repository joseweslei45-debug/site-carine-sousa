import { ArrowUpRight, CalendarHeart } from 'lucide-react'
import { contact, whatsappLink } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { WhatsAppIcon } from '../ui/icons'

export function Booking() {
  return (
    <section id="agendamento" aria-labelledby="agendamento-title" className="px-3 sm:px-6">
      <div className="relative mx-auto max-w-[96rem] overflow-hidden rounded-[2rem] bg-cocoa px-6 py-24 text-center sm:rounded-[2.5rem] sm:py-32">
        {/* Ornamentos sutis */}
        <div aria-hidden className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full border border-ivory/10" />
        <div aria-hidden className="absolute -top-56 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-ivory/5" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 -left-4 font-serif text-[14rem] leading-none text-ivory/[0.04] italic select-none sm:text-[20rem]">
          cs
        </span>

        <Reveal className="relative mx-auto max-w-2xl">
          <CalendarHeart className="mx-auto h-7 w-7 text-blush" strokeWidth={1} aria-hidden />
          <p className="eyebrow mt-6 text-blush!">Agendamento</p>
          <h2 id="agendamento-title" className="display mt-5 text-[2.6rem] text-ivory! sm:text-6xl lg:text-[4.2rem]">
            Seu momento de cuidado <em className="font-normal italic text-blush">começa aqui.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-[0.95rem] leading-relaxed text-ivory/70">
            Escolha seu procedimento e agende seu atendimento de maneira simples e prática.
          </p>

          <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={contact.bookingUrl} external variant="light" icon={<ArrowUpRight className="h-3.5 w-3.5" />} className="sm:px-8! sm:py-4!">
              Agendar meu horário
            </Button>
            <Button href={whatsappLink()} external variant="outlineLight" className="sm:py-4!">
              <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-[0.7rem] tracking-wide text-ivory/45">Agendamento online pela plataforma Tua Agenda.</p>
        </Reveal>
      </div>
    </section>
  )
}
