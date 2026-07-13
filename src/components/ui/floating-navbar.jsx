import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { cn } from '../../lib/utils'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact']

// Aceternity UI "Floating Navbar" (via 21st.dev). Hidden at the top of the
// page; slides in when the user scrolls back up. Highlights the section
// currently in view.
export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const active = useActiveSection(sectionIds)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()
      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        setVisible(direction < 0)
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-1 rounded-full border border-white/[0.2] bg-background/90 py-2 pl-3 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm',
          className,
        )}
      >
        {navItems.map((navItem, idx) => {
          const id = navItem.link.replace('#', '')
          const isActive = active === id
          return (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                isActive ? 'text-primary' : 'text-neutral-50 hover:text-primary',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="floating-nav-active"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-primary/10"
                />
              )}
              <span className="relative z-10">{navItem.name}</span>
            </a>
          )
        })}
        <a
          href="#contact"
          className="relative ml-2 rounded-full border border-white/[0.2] px-4 py-2 text-sm font-medium text-white"
        >
          <span>Hire me</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </a>
      </motion.div>
    </AnimatePresence>
  )
}
