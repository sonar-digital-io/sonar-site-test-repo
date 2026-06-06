import { Link } from 'react-router-dom'

interface ButtonProps {
  text: string
  href: string
  variant?: 'base' | 'dark'
  external?: boolean
}

export default function Button({ text, href, variant = 'base', external = false }: ButtonProps) {
  const variantClass = variant === 'dark' ? ' w-variant-93bbec15-5f8f-874e-b32e-00a30c7230ec' : ''
  const className = `button${variantClass} w-inline-block`

  const inner = (
    <>
      <div className={`w-layout-vflex text-part${variantClass}`}>
        <div className={`button--text${variantClass}`}>{text}</div>
      </div>
      <div className={`w-layout-vflex icon-part${variantClass}`}>
        <div className={`icon${variantClass}`}>arrow_forward</div>
      </div>
    </>
  )

  if (external || href.startsWith('http')) {
    return <a href={href} className={className}>{inner}</a>
  }
  return <Link to={href} className={className}>{inner}</Link>
}
