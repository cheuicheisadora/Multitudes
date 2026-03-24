# Multitudes Consultoria — Site Institucional

Site institucional de captação de leads para a **Multitudes Consultoria**, especializada em estratégia política para campanhas, mandatos e análises eleitorais.

## Stack

| Tecnologia | Função |
|---|---|
| Next.js 16 (App Router) | Framework full-stack |
| TypeScript strict | Tipagem |
| Tailwind CSS 4 | Estilização |
| Prisma 7 + PostgreSQL (Neon) | ORM + banco de dados |
| Zod | Validação |
| Resend | Emails transacionais |
| TanStack Query | Data fetching (admin) |
| Sonner | Notificações toast |

## Setup

### 1. Clone e instale dependências

```bash
git clone <repo-url>
cd multitudes
npm install
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env.local
```

Preencha as variáveis no `.env.local`:

```env
DATABASE_URL=postgresql://...           # Neon database URL
RESEND_API_KEY=re_...                   # Resend API key
RESEND_FROM_EMAIL=contato@...
RESEND_NOTIFY_EMAIL=time@...
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999...
ADMIN_USERNAME=admin
ADMIN_PASSWORD=sua-senha-forte
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Multitudes Consultoria

DATABASE_URL="postgresql://..."

AUTH_SECRET=""

RESEND_API_KEY="..."

NEXT_PUBLIC_APP_URL="http://localhost:3000"

YOUTUBE_API_KEY= AIzaSyCt7_SMhaAhEsoiA9daFE6FmSutcslN1bE
```

### 3. Configure o banco de dados

```bash
# Aplicar schema no banco
npm run db:push

# Gerar Prisma Client
npm run db:generate
```

### 4. Rode em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 5. Painel Admin

Acesse `/admin` — o browser pedirá usuário e senha (HTTP Basic Auth).

Use as credenciais `ADMIN_USERNAME` / `ADMIN_PASSWORD` do `.env.local`.

## Comandos úteis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run tokens       # Regenerar CSS tokens do design system
npm run tokens:check # Verificar se tokens estão sincronizados
npm run db:generate  # Gerar Prisma Client
npm run db:push      # Aplicar schema no banco
npm run db:migrate   # Criar migration
```

## Estrutura de pastas

```
multitudes/
├── app/
│   ├── (public)/              # Rotas públicas
│   │   ├── page.tsx           # Home (landing page)
│   │   ├── metodo/
│   │   ├── servicos/
│   │   ├── newsletter/
│   │   ├── videos/
│   │   ├── sobre/
│   │   └── contato/
│   ├── admin/                 # Painel admin (HTTP Basic Auth)
│   │   ├── page.tsx           # Dashboard
│   │   ├── leads/
│   │   ├── inscritos/
│   │   └── videos/
│   ├── api/
│   │   ├── leads/route.ts     # POST (criar lead) + GET (listar)
│   │   ├── leads/export/      # GET (CSV export)
│   │   ├── subscribers/       # POST + GET
│   │   └── videos/            # POST + GET + DELETE [id]
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                    # Componentes base (Button, Input, etc.)
│   ├── forms/                 # ContactForm, NewsletterForm, BriefingForm
│   ├── layout/                # Header, Footer, WhatsAppButton
│   ├── sections/              # Seções da landing page
│   └── videos/                # VideoGrid, VideoEmbed
├── design-system/
│   ├── tokens.ts              # Design tokens (single source of truth)
│   ├── utils.ts               # Helpers de conversão
│   └── generate-css.ts        # Gerador de CSS vars
├── lib/
│   ├── db.ts                  # PrismaClient singleton
│   ├── email.ts               # Templates de email (Resend)
│   └── validations.ts         # Schemas Zod
├── prisma/
│   └── schema.prisma          # Schema do banco de dados
├── proxy.ts                   # HTTP Basic Auth para /admin
└── .env.example
```

## Deploy

### Vercel + Neon

1. Crie um banco PostgreSQL no [Neon](https://neon.tech) (free tier)
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente no painel do Vercel
4. O deploy acontece automaticamente a cada push

### Variáveis de ambiente no Vercel

Configure todas as variáveis do `.env.example` no painel:
`Settings → Environment Variables`

## Design System

Os tokens de design ficam em `design-system/tokens.ts` e são gerados como CSS custom properties em `app/globals.css`.

Nunca use hex hardcoded nos componentes. Use os tokens semânticos Tailwind:
- `bg-primary`, `text-primary-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-background`, `text-foreground`
- `bg-muted`, `text-muted-foreground`
- `border-border`

Para verificar que os tokens estão sincronizados: `npm run tokens:check`
