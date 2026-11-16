# Carine Sousa — Micropigmentação & Estética Facial

Site institucional em React + TypeScript + Tailwind CSS (v4) + Lucide Icons, com build pelo Vite.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a versão final em /dist
npm run preview   # visualiza a versão final
```

Para publicar, envie a pasta `dist/` para qualquer hospedagem estática (Vercel, Netlify, Hostinger etc.).

## Onde editar o conteúdo

Todos os textos, contatos e listas estão em **`src/data/site.ts`**:

| O quê | Onde |
| --- | --- |
| Telefone, WhatsApp, link de agendamento, endereço | `contact` |
| **Instagram** | `contact.instagramUrl` (enquanto estiver vazio, o ícone fica oculto) |
| Procedimentos (nome, descrição, foto, **preço** e duração opcionais) | `services` |
| Galeria de resultados | `gallery` |
| Diferenciais | `differentials` |
| Depoimentos e nota | `testimonials`, `rating` |
| Fotos do hero e da seção "Sobre" | `images` |

### Trocar as fotos

As fotos atuais são do banco de imagens **Unsplash** (licença gratuita) e servem apenas como ilustração.

1. Coloque as fotos reais em `public/images/` (ex.: `public/images/carine.jpg`).
2. Em `site.ts`, troque o `src` por `'/images/carine.jpg'`.
3. Na galeria, fotos reais de clientes (com autorização) devem usar `illustrative: false`. Assim o selo "Imagem ilustrativa" e o aviso abaixo da galeria somem.

**Prioridade:** uma foto profissional da Carine em `images.about`.

## Estrutura

```
src/
  data/site.ts             ← conteúdo centralizado
  components/sections/     ← uma seção por arquivo (Header, Hero, About, Services, Gallery…)
  components/ui/           ← componentes reutilizáveis (Button, SmartImage, Reveal…)
  hooks/                   ← animação ao rolar, travamento de scroll em modais
index.html                 ← SEO, Open Graph e dados estruturados (SEO local)
```
