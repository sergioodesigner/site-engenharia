export default function About() {
  return (
    <section id="about" className="bg-slate-950">
      <div className="container max-w-7xl py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-slate-400">Bem-vindo ao</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">SUAEMPRESA</h2>
          <p className="mt-4 text-slate-300">
            Atuamos com excelência em diversas áreas do Direito, unindo experiência, ética e comprometimento para oferecer soluções jurídicas completas e personalizadas.
          </p>
          <p className="mt-3 text-slate-300">
            Parceria, transparência e resultados sustentáveis fazem parte de nossa cultura. Conheça nossa equipe e descubra como podemos apoiar você ou sua empresa.
          </p>
          <a href="#contact" className="mt-6 inline-flex px-6 py-3 rounded bg-gold text-slate-900 font-semibold">Saiba mais</a>
        </div>
        <div className="w-full flex justify-start md:justify-end">
          <img
            src="https://images.pexels.com/photos/4427543/pexels-photo-4427543.jpeg"
            alt="Foto do sócio"
            className="block w-full h-64 md:h-80 rounded-xl object-cover border border-slate-700"
          />
        </div>
      </div>
    </section>
  )
}