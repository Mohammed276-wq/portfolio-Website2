import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-white">
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.div variants={item} className="mt-2 h-1 w-16 rounded bg-primary" />

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <motion.p variants={item} className="leading-relaxed text-muted">
            I&apos;m Mohammed Abd Al Rahman Himedan, a developer focused on AI
            automation and modern web applications. I design systems that
            eliminate repetitive work — from AI-powered agents and workflow
            automation to responsive, high-performance websites.
          </motion.p>
          <motion.p variants={item} className="leading-relaxed text-muted">
            My work sits at the intersection of practical AI and solid web
            engineering: connecting large language models, APIs, and automation
            platforms into products people actually use.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
