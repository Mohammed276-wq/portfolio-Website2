import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded bg-primary" />
        <p className="mt-6 leading-relaxed text-muted">
          Have a project in mind, or want to automate something with AI? I&apos;m
          open to freelance work and collaborations — let&apos;s talk.
        </p>

        <motion.a
          href="mailto:programmingcode12345@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary-dark"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  )
}
