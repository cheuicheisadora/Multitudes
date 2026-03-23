import Link from 'next/link'
import { Providers } from '@/components/providers'
import { LayoutDashboard, Users, Mail, Video, Home } from 'lucide-react'

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/leads', label: 'Leads', icon: Users },
  { href: '/admin/inscritos', label: 'Inscritos', icon: Mail },
  { href: '/admin/videos', label: 'Vídeos', icon: Video },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <aside
          style={{ background: 'var(--sidebar-background)', color: 'var(--sidebar-foreground)' }}
          className="w-56 shrink-0"
        >
          <div className="flex h-16 items-center px-6 border-b border-[var(--sidebar-border)]">
            <span className="font-bold text-[var(--sidebar-primary)]">Multitudes</span>
            <span className="ml-1 text-xs opacity-60">Admin</span>
          </div>
          <nav className="mt-4 px-3 space-y-1">
            {adminNav.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[var(--sidebar-foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--sidebar-accent)] transition-all"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-6 px-6 w-56">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs opacity-50 hover:opacity-80 text-[var(--sidebar-foreground)]"
            >
              <Home className="h-3 w-3" />
              Ver site
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </Providers>
  )
}
