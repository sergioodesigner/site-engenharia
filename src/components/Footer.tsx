export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">
      <div className="container max-w-7xl py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-serif text-xl">SEULOGO</div>
          <p className="mt-4 text-sm text-slate-300">Excelência jurídica com foco em resultados.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <ul className="mt-3 text-sm text-slate-300 space-y-2">
            <li>+55 (11) 0000-0000</li>
            <li>contato@suaempresa.com</li>
            <li>Av. Paulista, 1000 - São Paulo/SP</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-3 text-sm text-slate-300 space-y-2">
            <li><a href="#practice" className="hover:text-gold">Áreas</a></li>
            <li><a href="#about" className="hover:text-gold">Sobre</a></li>
            <li><a href="#home" className="hover:text-gold">Início</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container max-w-7xl py-6 text-center text-xs text-slate-400">
          <p>© 2025 SUAEMPRESA. Todos os direitos reservados.</p>
          <p>Página criada por: SuaEmpresa.</p>
        </div>
      </div>
    </footer>
  )
}