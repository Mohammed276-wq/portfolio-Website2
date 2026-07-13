import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '../lib/utils'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()
  const active = useActiveSection(sectionIds)

  // Fade out once scrolled; the FloatingNav takes over on scroll-up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setAtTop(latest < 120)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: atTop ? 0 : -40, opacity: atTop ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: atTop ? 'auto' : 'none' }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Mohammed<span className="text-primary">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative pb-1 text-sm font-medium transition-colors hover:text-primary',
                  active === link.id ? 'text-primary' : 'text-muted',
                )}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="navbar-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-slate-200" />
          <span className="h-0.5 w-6 bg-slate-200" />
          <span className="h-0.5 w-6 bg-slate-200" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex flex-col gap-4 border-t border-white/5 px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  active === link.id ? 'text-primary' : 'text-muted',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}
