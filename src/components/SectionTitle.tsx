type Props = { subtitle?: string; title: string; align?: 'left' | 'center' }

export default function SectionTitle({ subtitle, title, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {subtitle && (
        <p className="uppercase tracking-widest text-xs text-slate-400">{subtitle}</p>
      )}
      <h2 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h2>
    </div>
  )
}