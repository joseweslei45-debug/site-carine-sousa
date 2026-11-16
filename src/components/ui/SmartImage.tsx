import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string
  alt: string
  wrapperClassName?: string
  priority?: boolean
}

/**
 * Imagem com estado de carregamento (shimmer), fade-in e fallback elegante em caso de erro.
 */
export function SmartImage({ src, alt, className = '', wrapperClassName = '', priority, ...rest }: Props) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const priorityAttr = { fetchpriority: priority ? 'high' : 'auto' } as Record<string, string>

  return (
    <div className={`relative overflow-hidden ${status === 'loading' ? 'img-skeleton' : 'bg-sand'} ${wrapperClassName}`}>
      {status === 'error' ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-cocoa-soft">
          <ImageOff className="h-5 w-5" strokeWidth={1.25} aria-hidden />
          <span className="text-[0.62rem] uppercase tracking-[0.25em]">Imagem indisponível</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...priorityAttr}
          ref={(img) => {
            // Imagens já em cache podem disparar onLoad antes da hidratação
            if (img?.complete && img.naturalWidth > 0 && status === 'loading') setStatus('loaded')
          }}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ease-(--ease-soft) ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  )
}
