import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn('[email] RESEND_API_KEY not set — emails will not be sent')
    return null
  }
  return new Resend(key)
}

const FROM = process.env.RESEND_FROM_EMAIL ?? 'contato@multitudes.com.br'
const NOTIFY = process.env.RESEND_NOTIFY_EMAIL ?? 'time@multitudes.com.br'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Multitudes Consultoria'

export async function sendLeadNotification(lead: {
  name: string
  email: string
  phone?: string | null
  role?: string | null
  city?: string | null
  state?: string | null
  context?: string | null
  source?: string | null
}) {
  const resend = getResend()
  if (!resend) return

  return resend.emails.send({
    from: FROM,
    to: NOTIFY,
    subject: `Novo lead: ${lead.name} (${lead.source ?? 'site'})`,
    html: `
      <h2>Novo lead recebido — ${SITE_NAME}</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.phone ?? '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Cargo/Projeto</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.role ?? '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Cidade/Estado</td><td style="padding:8px;border:1px solid #e2e8f0;">${[lead.city, lead.state].filter(Boolean).join('/') || '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Mensagem</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.context ?? '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:bold;">Origem</td><td style="padding:8px;border:1px solid #e2e8f0;">${lead.source ?? '—'}</td></tr>
      </table>
    `,
  })
}

export async function sendContactConfirmation(lead: { name: string; email: string }) {
  const resend = getResend()
  if (!resend) return

  return resend.emails.send({
    from: FROM,
    to: lead.email,
    subject: `Recebemos seu contato — ${SITE_NAME}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#2d3748;">
        <div style="background:#1a2332;padding:32px;text-align:center;">
          <h1 style="color:#c9a84c;margin:0;font-size:24px;">${SITE_NAME}</h1>
        </div>
        <div style="padding:32px;">
          <h2>Olá, ${lead.name}!</h2>
          <p>Recebemos seu contato e retornaremos em breve.</p>
          <p>Nossa equipe analisa cada briefing com cuidado para oferecer a orientação mais adequada ao seu projeto político.</p>
          <p style="margin-top:32px;color:#718096;font-size:14px;">
            Em caso de urgência, acesse nosso WhatsApp diretamente pelo site.
          </p>
        </div>
        <div style="background:#f8f7f4;padding:16px;text-align:center;color:#718096;font-size:12px;">
          © ${new Date().getFullYear()} ${SITE_NAME} — Todos os direitos reservados
        </div>
      </div>
    `,
  })
}

export async function sendWelcomeNewsletter(subscriber: { name?: string | null; email: string }) {
  const resend = getResend()
  if (!resend) return

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://multitudes.com.br'
  const firstName = subscriber.name?.split(' ')[0] ?? 'leitor'

  return resend.emails.send({
    from: FROM,
    to: subscriber.email,
    subject: `Bem-vindo à newsletter da ${SITE_NAME}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#2d3748;">
        <div style="background:#1a2332;padding:32px;text-align:center;">
          <h1 style="color:#c9a84c;margin:0;font-size:24px;">${SITE_NAME}</h1>
        </div>
        <div style="padding:32px;">
          <h2>Olá, ${firstName}!</h2>
          <p>Sua inscrição foi confirmada. A partir de agora você receberá análises políticas, pesquisas eleitorais e inteligência estratégica diretamente no seu e-mail.</p>

          <div style="background:#f8f7f4;border-left:4px solid #c9a84c;padding:16px;margin:24px 0;">
            <strong>Seu presente de boas-vindas:</strong>
            <p style="margin:8px 0 0;">Baixe agora nosso relatório de entrada — um panorama completo do cenário eleitoral atual.</p>
            <a href="${appUrl}/downloads/relatorio-entrada.pdf"
               style="display:inline-block;margin-top:16px;background:#c9a84c;color:#1a2332;padding:12px 24px;text-decoration:none;border-radius:4px;font-weight:bold;">
              Baixar Relatório
            </a>
          </div>

          <p style="margin-top:32px;color:#718096;font-size:14px;">
            Para cancelar a inscrição, responda este e-mail com "Cancelar".
          </p>
        </div>
        <div style="background:#f8f7f4;padding:16px;text-align:center;color:#718096;font-size:12px;">
          © ${new Date().getFullYear()} ${SITE_NAME} — Todos os direitos reservados
        </div>
      </div>
    `,
  })
}
