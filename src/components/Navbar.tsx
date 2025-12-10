import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Advogados', href: '#about' },
  { label: 'Áreas de Prática', href: '#practice' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container max-w-7xl flex items-center justify-between py-4">
        <div className="font-serif text-xl">SEULOGO</div>
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-slate-200 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button aria-label="Abrir menu" className="md:hidden p-2 rounded bg-slate-800" onClick={() => setOpen(o => !o)}>
          <span className="block w-5 h-0.5 bg-slate-100 mb-1"></span>
          <span className="block w-5 h-0.5 bg-slate-100 mb-1"></span>
          <span className="block w-5 h-0.5 bg-slate-100"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="container max-w-7xl py-4 space-y-3">
            {links.map(l => (
              <a key={l.label} href={l.href} className="block text-sm font-medium text-slate-200">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}