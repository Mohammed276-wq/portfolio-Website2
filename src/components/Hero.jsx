import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'
import { FlipWords } from './ui/flip-words'

const roles = ['AI agents', 'automations', 'modern websites', 'smart workflows']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <BackgroundBeams />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          AI Automation &amp; Web Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Mohammed Abd Al Rahman{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Himedan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-2xl font-semibold text-muted sm:text-3xl"
        >
          I build
          <FlipWords words={roles} className="font-bold text-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Combining AI workflows with clean, performant front-end engineering
          to turn repetitive work into intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary-dark"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-primary hover:text-primary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
