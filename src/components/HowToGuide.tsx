import { MediaFrame } from './MediaFrame'

export type HowToStep = {
  n: string
  title: string
  body: string
  image?: string
  imageAlt?: string
}

type HowToGuideProps = {
  steps: HowToStep[]
  className?: string
}

export function HowToGuide({ steps, className = '' }: HowToGuideProps) {
  return (
    <ol className={['space-y-12 sm:space-y-16', className].join(' ')}>
      {steps.map((step, index) => {
        const reverse = index % 2 === 1
        return (
          <li
            key={step.n}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <div className={reverse ? 'lg:order-2' : undefined}>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white font-display text-lg font-bold text-brand-dark shadow-sm shadow-brand-dark/10">
                  {step.n}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="font-display text-xl font-bold text-brand-dark sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
            {step.image ? (
              <MediaFrame
                src={step.image}
                alt={step.imageAlt ?? step.title}
                className={[
                  'mx-auto w-full max-w-lg lg:max-w-none',
                  reverse ? 'lg:order-1' : '',
                ].join(' ')}
              />
            ) : (
              <div
                className={['hidden lg:block', reverse ? 'lg:order-1' : ''].join(
                  ' ',
                )}
                aria-hidden
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}
