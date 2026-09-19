type FeatureItem = {
  title: string
  body: string
  image: string
  imageAlt: string
}

type FeatureGridProps = {
  items: FeatureItem[]
  className?: string
}

export function FeatureGrid({ items, className = '' }: FeatureGridProps) {
  const cols =
    items.length % 3 === 0 && items.length >= 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2'

  return (
    <ul className={['grid gap-8 lg:gap-10', cols, className].join(' ')}>
      {items.map((item) => (
        <li key={item.title} className="group flex flex-col">
          <div className="overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_12px_32px_rgba(18,40,70,0.08)]">
            <img
              src={item.image}
              alt={item.imageAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <h3 className="mt-5 font-display text-xl font-bold text-brand-dark sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {item.body}
          </p>
        </li>
      ))}
    </ul>
  )
}
