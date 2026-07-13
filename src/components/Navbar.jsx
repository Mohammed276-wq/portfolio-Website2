import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
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
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
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
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
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
