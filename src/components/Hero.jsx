import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'
import { Particles } from './ui/particles'
import { Typewriter } from './ui/typewriter'

const roles = ['AI Automation Developer', 'Voice AI Builder', 'Full-Stack Developer']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background layers: beams, particles, breathing gradient blobs */}
      <BackgroundBeams />
      <Particles quantity={60} />
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/4 top-2/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Mohammed Abd Al Rahman{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Himedan
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-6 flex h-10 items-center justify-center text-2xl font-semibold text-slate-200 sm:h-12 sm:text-3xl"
        >
          <Typewriter phrases={roles} className="text-primary" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Combining AI workflows with clean, performant front-end engineering
          to turn repetitive work into intelligent systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
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

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-primary"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-current"
          />
        </span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
        >
          <path
            d="M1 1l7 6 7-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.a>
    </section>
  )
}
