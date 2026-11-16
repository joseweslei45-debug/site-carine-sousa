import { CalendarCheck, CalendarClock, GraduationCap } from 'lucide-react'
import { courses, whatsappLink, type Course } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppIcon } from '../ui/icons'

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const MONTHS_FULL = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

/** Lê 'AAAA-MM-DD' como data local (evita deslocamento de fuso). */
function parseDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function daysUntil(iso: string) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.round((parseDate(iso).getTime() - today.getTime()) / 86_400_000)
}

function enrollmentStatus(course: Course) {
  const left = daysUntil(course.enrollmentUntil)
  if (left < 0) return { open: false, label: 'Inscrições encerradas' }
  if (left === 0) return { open: true, label: 'Último dia de inscrições' }
  if (left === 1) return { open: true, label: 'Inscrições encerram amanhã' }
  return { open: true, label: `Faltam ${left} dias para encerrar as inscrições` }
}

export function Courses() {
  if (courses.length === 0) return null

  return (
    <section id="cursos" aria-labelledby="cursos-title" className="bg-sand/55 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="cursos-title"
          eyebrow="Cursos"
          title="Aprenda com quem"
          italic="ama o que faz."
          intro="Compartilhando técnica, cuidado e atenção aos detalhes com quem deseja aprender e se aperfeiçoar na estética."
        />

        <ul className="mt-14 grid gap-6">
          {courses.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={i * 100}>
                <CourseCard course={c} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  const status = enrollmentStatus(course)
  const until = parseDate(course.enrollmentUntil)
  const start = parseDate(course.startDate)
  const extras = [
    course.workload && { label: 'Carga horária', value: course.workload },
    course.format && { label: 'Formato', value: course.format },
    course.price && { label: 'Investimento', value: course.price },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <article className="grid overflow-hidden rounded-3xl border border-cocoa/10 bg-ivory lg:grid-cols-12">
      {/* Informações */}
      <div className="p-8 sm:p-12 lg:col-span-7">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] ${
            status.open ? 'bg-cocoa text-ivory' : 'bg-sand text-cocoa-soft'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status.open ? 'animate-pulse bg-blush' : 'bg-cocoa-soft'}`} aria-hidden />
          {status.open ? 'Inscrições abertas' : 'Inscrições encerradas'}
        </span>

        <h3 className="mt-7 flex items-start gap-4 font-serif text-[2.1rem] leading-tight text-cocoa sm:text-[2.6rem]">
          <GraduationCap className="mt-2 hidden h-7 w-7 shrink-0 text-gold sm:block" strokeWidth={1} aria-hidden />
          {course.name}
        </h3>
        <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-cocoa-soft">{course.description}</p>

        {extras.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-cocoa/10 pt-6">
            {extras.map((e) => (
              <div key={e.label}>
                <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-cocoa-soft">{e.label}</dt>
                <dd className="mt-1 text-sm text-cocoa">{e.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          {status.open ? (
            <Button
              href={whatsappLink(`Olá, Carine! Tenho interesse no ${course.name} com início em ${start.getDate()} de ${MONTHS_FULL[start.getMonth()]}. Pode me passar mais informações?`)}
              external
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Quero me inscrever
            </Button>
          ) : (
            <Button
              href={whatsappLink(`Olá, Carine! Gostaria de saber sobre as próximas turmas do ${course.name}.`)}
              external
              variant="outline"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Avise-me da próxima turma
            </Button>
          )}
          <p className="text-[0.75rem] text-cocoa-soft sm:ml-3">{status.label}</p>
        </div>
      </div>

      {/* Datas */}
      <div className="relative grid grid-cols-2 bg-cocoa text-ivory lg:col-span-5 lg:grid-cols-1">
        <DateBlock
          icon={<CalendarClock className="h-4 w-4" strokeWidth={1.3} />}
          label="Inscrições até"
          date={until}
          muted={!status.open}
        />
        <DateBlock icon={<CalendarCheck className="h-4 w-4" strokeWidth={1.3} />} label="Início do curso" date={start} divider />
      </div>
    </article>
  )
}

function DateBlock({
  icon,
  label,
  date,
  divider,
  muted,
}: {
  icon: React.ReactNode
  label: string
  date: Date
  divider?: boolean
  muted?: boolean
}) {
  return (
    <div
      className={`flex flex-col justify-center p-7 sm:p-10 ${
        divider ? 'border-l border-ivory/12 lg:border-t lg:border-l-0' : ''
      } ${muted ? 'opacity-50' : ''}`}
    >
      <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.25em] text-blush">
        <span aria-hidden>{icon}</span>
        {label}
      </p>
      <p className="mt-4 flex items-baseline gap-3">
        <time
          dateTime={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}
          className="font-serif text-[3.6rem] leading-none font-light sm:text-[4.5rem]"
        >
          {String(date.getDate()).padStart(2, '0')}
        </time>
        <span className="font-serif text-xl text-ivory/80 italic sm:text-2xl">
          {MONTHS[date.getMonth()]}
          <span className="sr-only"> de {date.getFullYear()}</span>
        </span>
      </p>
      <p className="mt-2 text-[0.7rem] tracking-wide text-ivory/55">
        {date.toLocaleDateString('pt-BR', { weekday: 'long' })}, {date.getFullYear()}
      </p>
    </div>
  )
}
