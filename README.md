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

Preencha as variáveis no `.env.local` (veja o `.env.example` incluído no repositório).

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

### Requisitos da infraestrutura

Este projeto exige dois serviços para funcionar em produção:

| Serviço | Requisito |
|---|---|
| **Plataforma Node.js** | Suporte a Next.js 16 com App Router (SSR + API Routes) |
| **PostgreSQL** | Banco relacional compatível com Prisma (versão 14+) |

> **Atenção:** o projeto **não** pode ser hospedado em hospedagens PHP tradicionais (Hostinger, Locaweb shared, GoDaddy shared), pois requer runtime Node.js e banco PostgreSQL externo.

---

### Opções de hospedagem recomendadas

#### Opção A — Vercel + Neon *(recomendada)*

Combinação nativa para Next.js. Zero configuração de servidor.

| Item | Detalhe |
|---|---|
| App (Next.js) | [vercel.com](https://vercel.com) — plano Hobby gratuito ou Pro ~$20/mês |
| Banco (PostgreSQL) | [neon.tech](https://neon.tech) — free tier generoso (0,5 GB, serverless) |
| CI/CD | Automático via push no GitHub |
| Escalabilidade | Serverless, escala automaticamente |

**Passos:**
1. Crie o banco em [neon.tech](https://neon.tech) e copie a `DATABASE_URL`
2. Conecte o repositório em [vercel.com](https://vercel.com)
3. Configure as variáveis de ambiente em `Settings → Environment Variables`
4. Deploy automático a cada push na branch principal

---

#### Opção B — Railway *(tudo em um lugar)*

Hospeda o app Next.js e o PostgreSQL na mesma plataforma.

| Item | Detalhe |
|---|---|
| App + Banco | [railway.app](https://railway.app) |
| Custo | ~$5–20/mês conforme uso (baseado em consumo) |
| Vantagem | App e banco no mesmo painel, mais simples de gerenciar |

---

#### Opção C — Render *(econômico)*

| Item | Detalhe |
|---|---|
| App (Web Service) | [render.com](https://render.com) — ~$7/mês |
| Banco (PostgreSQL) | Render Postgres — ~$7/mês |
| Observação | Cold start em planos gratuitos (lentidão na primeira requisição) |

---

### Variáveis de ambiente obrigatórias

Configure todas as variáveis do `.env.example` no painel da plataforma escolhida:

```
DATABASE_URL          # String de conexão PostgreSQL
RESEND_API_KEY        # Chave da API Resend (e-mails transacionais)
RESEND_FROM_EMAIL     # E-mail remetente verificado no Resend
RESEND_NOTIFY_EMAIL   # E-mail que recebe notificações internas
ADMIN_USERNAME        # Usuário do painel /admin
ADMIN_PASSWORD        # Senha do painel /admin
NEXT_PUBLIC_APP_URL   # URL pública do site (ex: https://multitudes.com.br)
YOUTUBE_API_KEY       # Chave da API do YouTube (para seção de vídeos)
```

## Design System

Os tokens de design ficam em `design-system/tokens.ts` e são gerados como CSS custom properties em `app/globals.css`.

Nunca use hex hardcoded nos componentes. Use os tokens semânticos Tailwind:
- `bg-primary`, `text-primary-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-background`, `text-foreground`
- `bg-muted`, `text-muted-foreground`
- `border-border`

Para verificar que os tokens estão sincronizados: `npm run tokens:check`
