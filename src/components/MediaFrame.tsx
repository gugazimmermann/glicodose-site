type MediaFrameProps = {
  src: string
  type?: 'image' | 'video'
  alt?: string
  className?: string
  poster?: string
}

export function MediaFrame({
  src,
  type = 'image',
  alt = '',
  className = '',
  poster,
}: MediaFrameProps) {
  return (
    <div className={['relative', className].join(' ')}>
      <div className="device-glow" aria-hidden />
      <div className="relative z-10 overflow-hidden rounded-2xl border border-line/50 bg-white shadow-[0_20px_48px_rgba(18,40,70,0.14)]">
        {type === 'video' ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[4/3] w-full bg-white object-contain"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className="aspect-[4/3] w-full bg-white object-contain object-center"
          />
        )}
      </div>
    </div>
  )
}
