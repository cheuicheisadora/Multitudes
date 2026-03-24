import Link from 'next/link'

const navLinks = [
  { href: '/metodo',     label: 'Método' },
  { href: '/servicos',   label: 'Serviços' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/videos',     label: 'Vídeos' },
  { href: '/sobre',      label: 'Sobre' },
  { href: '/contato',    label: 'Contato' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#070A10" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: 'var(--red)' }}
                aria-hidden
              />
              <span
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
              >
                Multitudes
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Estratégia política orientada por dados.
            </p>
            <div className="mt-4 space-y-1">
              <a
                href="mailto:Adaocand@gmail.com"
                className="block text-sm transition-colors hover:text-white"
                style={{ color: 'var(--muted)' }}
              >
                Adaocand@gmail.com
              </a>
              <a
                href="tel:+5561992560616"
                className="block text-sm transition-colors hover:text-white"
                style={{ color: 'var(--muted)' }}
              >
                (61) 9256-0616
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Navegação
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Redes sociais
            </h3>
            <div className="flex items-center gap-4">
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com' },
                { icon: <YouTubeIcon />,   label: 'YouTube',   href: 'https://youtube.com' },
                { icon: <LinkedInIcon />,  label: 'LinkedIn',  href: 'https://linkedin.com' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                  style={{ color: 'var(--muted)' }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--subtle)' }}>
            © {new Date().getFullYear()} Multitudes Consultoria · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
