/**
 * ============================================================
 *  DADOS DO SITE — edite aqui textos, contatos, serviços,
 *  galeria e depoimentos. Os componentes leem tudo deste arquivo.
 * ============================================================
 */

/** Monta a URL de uma foto do Unsplash no tamanho desejado. */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

/**
 * Fotos reais do Instagram da Carine (@carinesousa.clinic.academy),
 * otimizadas em /public/images/ig. `small` usa a versão de 700px.
 */
export const ig = (name: string, small = false) =>
  `${import.meta.env.BASE_URL}images/ig/${name}${small ? '-sm' : ''}.webp`

// ------------------------------------------------------------
// MARCA E CONTATO
// ------------------------------------------------------------
export const brand = {
  name: 'Carine Sousa',
  tagline: 'Micropigmentação & Estética Facial',
  footerText:
    'Carine Sousa — Micropigmentação & Estética Facial. Cuidado, delicadeza e beleza em cada detalhe.',
}

export const contact = {
  phoneDisplay: '(88) 99985-0697',
  phoneE164: '+5588999850697',
  whatsappUrl: 'https://wa.me/5588999850697',
  whatsappMessage: 'Olá, Carine! Vim pelo site e gostaria de mais informações.',
  bookingUrl: 'https://carinesousasobrancelhas.tuaagenda.app/',
  /**
   * Instagram — cole aqui o link do perfil, ex.: 'https://instagram.com/seuperfil'.
   * Enquanto estiver vazio, o ícone não é exibido (para não haver link quebrado).
   */
  instagramUrl: 'https://www.instagram.com/carinesousa.clinic.academy/',
  instagramHandle: '@carinesousa.clinic.academy',
  address: {
    street: 'Tv. Tiradentes, 201',
    district: 'Centro',
    city: 'Quixadá',
    state: 'CE',
    zip: '63900-129',
    reference: 'Em frente ao estacionamento do Banco Bradesco, acima da Prolab.',
  },
  mapsQuery: 'Tv. Tiradentes, 201 - Centro, Quixadá - CE, 63900-129',
}

export const whatsappLink = (message = contact.whatsappMessage) =>
  `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapsQuery)}`

// ------------------------------------------------------------
// NAVEGAÇÃO
// ------------------------------------------------------------
export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Localização', href: '#localizacao' },
]

// ------------------------------------------------------------
// IMAGENS PRINCIPAIS
// Substitua pelas fotografias profissionais da Carine quando disponíveis
// (coloque os arquivos em /public/images e use, por ex., '/images/carine.jpg').
// ------------------------------------------------------------
export const images = {
  hero: {
    src: ig('sobrancelha-a2'),
    alt: 'Cliente com sobrancelhas definidas e naturais após atendimento com Carine Sousa',
  },
  heroDetail: {
    src: ig('labial-2', true),
    alt: 'Detalhe de micropigmentação labial com cor vermelha',
  },
  about: {
    src: ig('carine-atendimento'),
    alt: 'Carine Sousa de jaleco branco, segurando um equipamento de estética',
  },
  aboutDetail: {
    src: ig('studio', true),
    alt: 'Parede do estúdio Carine Sousa com o logotipo iluminado',
  },
}

// ------------------------------------------------------------
// PROCEDIMENTOS
// Para adicionar um novo, copie um bloco e ajuste os campos.
// `price` é opcional — deixe undefined para não exibir valor.
// ------------------------------------------------------------
export type Service = {
  id: string
  name: string
  short: string
  description: string
  details: string[]
  image: { src: string; alt: string }
  price?: string
  duration?: string
}

export const services: Service[] = [
  {
    id: 'micropigmentacao',
    name: 'Micropigmentação de Sobrancelhas',
    short: 'Técnica que realça o desenho das sobrancelhas de forma harmoniosa com os traços do rosto.',
    description:
      'Procedimento de pigmentação da pele na região das sobrancelhas, planejado de acordo com o formato do seu rosto e com o resultado que você deseja. Cada etapa é conversada antes do atendimento.',
    details: [
      'Avaliação e conversa sobre suas expectativas',
      'Desenho personalizado antes da pigmentação',
      'Orientações de cuidados após o procedimento',
    ],
    image: { src: ig('sobrancelha-b1', true), alt: 'Sobrancelhas com micropigmentação nas técnicas shadow line e fio a fio' },
  },
  {
    id: 'design-sobrancelhas',
    name: 'Design de Sobrancelhas',
    short: 'Modelagem que valoriza a expressão do olhar, respeitando o desenho natural de cada pessoa.',
    description:
      'Modelagem das sobrancelhas pensada para equilibrar o rosto e valorizar seu olhar, respeitando o desenho natural e o seu estilo.',
    details: [
      'Análise do formato do rosto',
      'Modelagem respeitando seus traços',
      'Atendimento com calma e atenção aos detalhes',
    ],
    image: { src: ig('sobrancelha-a1', true), alt: 'Cliente com sobrancelhas desenhadas e marcantes' },
  },
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    short: 'Cuidado facial para higienizar e renovar a pele, com um momento de bem-estar.',
    description:
      'Procedimento de cuidado facial voltado à higienização da pele, realizado com atenção ao seu tipo de pele e às suas necessidades.',
    details: [
      'Avaliação do tipo de pele',
      'Higienização e etapas de cuidado facial',
      'Orientações de cuidados em casa',
    ],
    image: { src: unsplash('1616394584738-fc6e612e71b9', 900), alt: 'Cliente recebendo aplicação de máscara facial durante limpeza de pele' },
  },
  {
    id: 'estetica-facial',
    name: 'Estética Facial',
    short: 'Cuidados faciais personalizados para valorizar a sua pele e a sua beleza natural.',
    description:
      'Atendimentos de estética facial pensados de forma individual, para cuidar da sua pele e proporcionar um momento de cuidado e autoestima.',
    details: [
      'Atendimento personalizado',
      'Cuidado em cada etapa',
      'Ambiente acolhedor e tranquilo',
    ],
    image: { src: unsplash('1570172619644-dfd03ed5d881', 900), alt: 'Profissional aplicando produto facial com pincel em cliente' },
  },
]

// ------------------------------------------------------------
// GALERIA DE RESULTADOS
// IMPORTANTE: marque `illustrative: true` em imagens de banco de imagens.
// Elas exibem o selo "Imagem ilustrativa". Fotos reais de clientes
// (com autorização) devem usar `illustrative: false`.
// ------------------------------------------------------------
export type GalleryItem = {
  src: string
  thumb: string
  alt: string
  caption: string
  illustrative: boolean
}

/** Foto real do Instagram da Carine (sem selo de ilustrativa). */
const real = (name: string, alt: string, caption: string): GalleryItem => ({
  src: ig(name),
  thumb: ig(name, true),
  alt,
  caption,
  illustrative: false,
})

export const gallery: GalleryItem[] = [
  real('sobrancelha-d', 'Duas fotos de cliente mostrando sobrancelhas com micropigmentação', 'Micropigmentação de sobrancelhas'),
  real('labial-1', 'Lábios com micropigmentação labial em tom vermelho', 'Micropigmentação labial'),
  real('sobrancelha-b2', 'Sobrancelhas nas técnicas fio a fio e shadow line', 'Fio a fio & shadow line'),
  real('labial-4', 'Close-up de lábios com cor uniforme após micropigmentação', 'Efeito batom'),
  real('labial-3', 'Lábios com contorno definido e cor natural avermelhada', 'Micropigmentação labial'),
  real('sobrancelha-c', 'Close-up de sobrancelhas com fios bem definidos', 'Detalhe dos fios'),
]

// ------------------------------------------------------------
// TURMAS FORMADAS (fotos reais de alunas com certificado)
// ------------------------------------------------------------
export const classPhotos = [
  { src: ig('turma-1'), thumb: ig('turma-1', true), alt: 'Carine Sousa com alunas segurando seus certificados' },
  { src: ig('turma-4'), thumb: ig('turma-4', true), alt: 'Turma de alunas de jaleco branco com certificados' },
  { src: ig('turma-3'), thumb: ig('turma-3', true), alt: 'Alunas formadas posando com certificados ao lado da Carine' },
  { src: ig('turma-2'), thumb: ig('turma-2', true), alt: 'Carine Sousa com aluna segurando o certificado' },
]

// ------------------------------------------------------------
// CURSOS
// Datas no formato AAAA-MM-DD. Após o fim das inscrições, o site
// mostra "Inscrições encerradas" automaticamente.
// Campos opcionais (workload, format, price) só aparecem se preenchidos.
// ------------------------------------------------------------
export type Course = {
  id: string
  name: string
  description: string
  enrollmentUntil: string
  startDate: string
  workload?: string
  format?: string
  price?: string
}

export const courses: Course[] = [
  {
    id: 'curso-jato-de-plasma',
    name: 'Curso de Jato de Plasma',
    description:
      'Aprenda a técnica de jato de plasma com a Carine Sousa. Fale pelo WhatsApp para receber todas as informações sobre conteúdo, valores e inscrição.',
    enrollmentUntil: '2026-11-20',
    startDate: '2026-11-30',
  },
]

// ------------------------------------------------------------
// DIFERENCIAIS
// ------------------------------------------------------------
export const differentials = [
  {
    icon: 'heart',
    title: 'Atendimento personalizado',
    text: 'Cada atendimento começa ouvindo você: seus gostos, seu estilo e o que deseja realçar.',
  },
  {
    icon: 'eye',
    title: 'Atenção aos detalhes',
    text: 'Do desenho ao acabamento, cada etapa é feita com calma, precisão e cuidado.',
  },
  {
    icon: 'leaf',
    title: 'Valorização da beleza natural',
    text: 'O objetivo é realçar os seus traços, respeitando a sua individualidade.',
  },
  {
    icon: 'shield',
    title: 'Cuidado em cada etapa',
    text: 'Orientação antes, durante e depois do procedimento, para você se sentir segura.',
  },
] as const

// ------------------------------------------------------------
// DEPOIMENTOS (reais — não adicione avaliações fictícias)
// ------------------------------------------------------------
export const rating = { value: '5,0', count: 7 }

export const testimonials = [
  {
    name: 'Ana Carolina',
    text: 'Queria deixar aqui registrado o quanto estou encantada com o resultado da minha sobrancelha. Dá para ver o quanto você ama o que faz pelo cuidado nos detalhes e pela paciência em entender o que a gente gosta. Ficou impecável, super natural e bem do jeito que eu imaginei.',
  },
  {
    name: 'Antonia Jacinta',
    text: 'Foi maravilhoso notar 10000 limpeza de pele excelente e sobrancelhas também, amei!',
  },
]
