import Link from 'next/link'

export function BriefingTrigger() {
  return (
    <Link
      href="/contato"
      className="btn-red inline-flex items-center gap-2 rounded-[3px] px-5 py-3 text-sm font-semibold text-white"
    >
      Conversa estratégica
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </Link>
  )
}
