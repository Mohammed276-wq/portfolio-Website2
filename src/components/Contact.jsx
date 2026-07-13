import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-white">
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        <motion.div variants={item} className="mx-auto mt-2 h-1 w-16 rounded bg-primary" />
        <motion.p variants={item} className="mt-6 leading-relaxed text-muted">
          Have a project in mind, or want to automate something with AI? I&apos;m
          open to freelance work and collaborations — let&apos;s talk.
        </motion.p>

        <motion.div variants={item}>
          <motion.a
            href="mailto:programmingcode12345@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary-dark"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
