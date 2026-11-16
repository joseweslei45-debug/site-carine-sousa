import { Eye, HeartHandshake, Leaf, ShieldCheck, type LucideIcon } from 'lucide-react'
import { differentials } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons: Record<(typeof differentials)[number]['icon'], LucideIcon> = {
  heart: HeartHandshake,
  eye: Eye,
  leaf: Leaf,
  shield: ShieldCheck,
}

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-title" className="bg-sand/55 py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="diferenciais-title"
            eyebrow="Diferenciais"
            title="Seu cuidado merece"
            italic="atenção aos detalhes."
          />
        </div>

        <ol className="grid gap-px overflow-hidden rounded-3xl bg-cocoa/10 sm:grid-cols-2 lg:col-span-8">
          {differentials.map((d, i) => {
            const Icon = icons[d.icon]
            return (
              <li key={d.title} className="bg-ivory">
                <Reveal delay={i * 90} className="group flex h-full flex-col p-8 sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ivory">
                      <Icon className="h-5 w-5" strokeWidth={1.2} aria-hidden />
                    </span>
                    <span className="font-serif text-sm text-cocoa-soft italic">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-[1.65rem] leading-tight text-cocoa">{d.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-cocoa-soft">{d.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
