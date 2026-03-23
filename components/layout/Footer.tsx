import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  Navegação: [
    { href: '/metodo', label: 'Método' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ],
  Conteúdo: [
    { href: '/videos', label: 'Vídeos' },
    { href: '/newsletter', label: 'Newsletter' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-accent">Multitudes</span>
            <p className="mt-3 text-sm opacity-70 max-w-sm leading-relaxed">
              Estratégia política para campanhas, mandatos e análises que precisam de método,
              mensagem e direção.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 opacity-20" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Multitudes Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-50">
            Estratégia política com método e dados.
          </p>
        </div>
      </div>
    </footer>
  )
}
