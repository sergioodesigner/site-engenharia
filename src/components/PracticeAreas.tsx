const areas = [
  { title: 'Seguros', desc: 'Consultoria e litígios em contratos e sinistros.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2 4 6v6c0 5.25 3.56 9.92 8 10 4.44-.08 8-4.75 8-10V6l-8-4Z"></path></svg>
  )},
  { title: 'Bancário & Financeiro', desc: 'Prevenção a fraudes e contencioso.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 3 3 9h18l-9-6Zm-9 8v10h4V11H3Zm6 0v10h6V11H9Zm8 0v10h4V11h-4Z"></path></svg>
  )},
  { title: 'Litígios Cíveis', desc: 'Equipe preparada para disputas complexas.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M9 2h6v2H9V2Zm-3 4h12l1 4H5l1-4Zm-2 6h16v10H4V12Z"></path></svg>
  )},
  { title: 'Direito de Família', desc: 'Apoio sensível e estratégico.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M7 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 22a6 6 0 0 1 12 0v1H2v-1Zm10 1h10v-1a6 6 0 0 0-12 0v1Z"></path></svg>
  )},
  { title: 'Direito Empresarial', desc: 'Assessoria completa para negócios.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M3 21h18V3H3v18Zm2-2V5h6v14H5Zm8 0V9h6v10h-6Z"></path></svg>
  )},
  { title: 'Direito Penal', desc: 'Defesa técnica e estratégica.', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 1 1-10 0V7a5 5 0 0 1 5-5Zm-8 18a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1H4v-1Z"></path></svg>
  )},
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="bg-slate-900">
      <div className="container max-w-7xl py-16">
        <p className="text-center uppercase tracking-widest text-xs text-slate-400">Nossos Serviços</p>
        <h2 className="text-center mt-2 font-serif text-3xl md:text-4xl">Áreas de Prática</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(a => (
            <div key={a.title} className="rounded-xl bg-slate-800/60 border border-slate-700 p-6">
              <div className="h-10 w-10 rounded-lg bg-slate-700 flex items-center justify-center text-gold">
                {a.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}