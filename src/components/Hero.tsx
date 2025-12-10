export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="gradient-overlay">
        <div className="container max-w-7xl py-24 md:py-32">
          <p className="uppercase tracking-widest text-slate-300 text-xs">Um sistema jurídico melhor</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-tight">
            Grandes <span className="text-gold">Advogados</span><br />
            Grande Escritório
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            Nosso escritório acredita que o sucesso do cliente determina o nosso. Trabalhamos lado a lado para alcançar objetivos com estratégia e precisão.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 rounded bg-gold text-slate-900 font-semibold hover:bg-gold-dark transition-colors">Agendar consulta</a>
            <a href="#practice" className="inline-flex items-center px-6 py-3 rounded border border-slate-700 hover:border-gold text-slate-100">Nossas áreas</a>
          </div>
        </div>
      </div>
    </section>
  )
}