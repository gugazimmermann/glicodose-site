type CtaButtonProps = {
  href: string
  children: string
  className?: string
  external?: boolean
}

export function CtaButton({
  href,
  children,
  className = '',
  external = false,
}: CtaButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-xl',
    'bg-brand px-6 py-3 text-base font-bold text-white no-underline',
    'shadow-lg shadow-brand-dark/20',
    'transition-[opacity,transform] duration-200 hover:opacity-95 hover:-translate-y-0.5',
    className,
  ].join(' ')

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
