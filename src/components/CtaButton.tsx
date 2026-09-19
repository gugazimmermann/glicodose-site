type CtaButtonProps = {
  children?: string
  className?: string
}

export function CtaButton({
  children = 'Em breve',
  className = '',
}: CtaButtonProps) {
  return (
    <button
      type="button"
      disabled
      className={[
        'inline-flex cursor-not-allowed items-center justify-center rounded-xl',
        'bg-brand px-6 py-3 text-base font-bold text-white',
        'opacity-80 shadow-lg shadow-brand-dark/20',
        'transition-[opacity,transform] duration-200',
        className,
      ].join(' ')}
      aria-disabled="true"
      title="Disponível em breve"
    >
      {children}
    </button>
  )
}
