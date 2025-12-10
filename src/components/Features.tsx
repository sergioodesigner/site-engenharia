const features = [
  {
    title: 'Consulta Gratuita',
    desc: 'Nossa equipe oferece orientação jurídica inicial sem custo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 1.75a.75.75 0 0 1 .75.75v3.02a6.25 6.25 0 0 1 5 6.11v1.21h1a.75.75 0 0 1 0 1.5h-1v1.25A3.25 3.25 0 0 1 14.5 19.5h-5A3.25 3.25 0 0 1 6.25 16.25V15h-1a.75.75 0 0 1 0-1.5h1v-1.21a6.25 6.25 0 0 1 5-6.11V2.5a.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
  },
  {
    title: 'Advogado Pessoal',
    desc: 'Acompanhamento dedicado e comunicação transparente em cada etapa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 1 1-10 0V7a5 5 0 0 1 5-5Zm-8 18a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1H4v-1Z" />
      </svg>
    ),
  },
  {
    title: 'Conselho Especializado',
    desc: 'Estratégias sólidas com base em experiência e jurisprudência.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11 2a1 1 0 0 1 2 0v9h3a1 1 0 1 1 0 2h-3v9a1 1 0 1 1-2 0v-9H8a1 1 0 1 1 0-2h3V2Z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="bg-slate-900">
      <div className="container max-w-7xl py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="rounded-xl bg-slate-800/60 border border-slate-700 p-6">
              <div className="h-10 w-10 rounded-lg bg-slate-700 flex items-center justify-center text-gold">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}