import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// Aceternity UI "Card Hover Effect" (via 21st.dev), extended with tag pills
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map((item, idx) => (
        <a
          key={item.title}
          href={item.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.tags?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/[0.2] bg-surface p-4 group-hover:border-slate-700',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        'mt-4 text-sm leading-relaxed tracking-wide text-zinc-400',
        className,
      )}
    >
      {children}
    </p>
  )
}
