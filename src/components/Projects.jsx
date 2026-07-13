import { motion } from 'framer-motion'
import { container, fadeUp, viewportOnce, viewportOnceTight, hoverSpring } from '../lib/animations'

const projects = [
  {
    title: 'AI Voice Receptionist',
    description:
      'An AI-powered phone receptionist that answers calls in a natural, human-like voice — greeting callers, booking appointments, and routing inquiries around the clock.',
    tags: ['Voice AI', 'Automation', 'Telephony'],
    link: '#',
  },
  {
    title: 'Wise Listener',
    description:
      'A voice-first AI companion that listens attentively, understands context, and responds with thoughtful, personalized guidance in real time.',
    tags: ['Voice AI', 'LLM', 'Conversational'],
    link: '#',
  },
  {
    title: 'FAQ Chatbot',
    description:
      'A custom-trained chatbot that instantly answers customer questions from a business’s own knowledge base — accurate, on-brand, and available 24/7.',
    tags: ['Chatbot', 'RAG', 'Integration'],
    link: '#',
  },
  {
    title: 'Bilingual CV Builder',
    description:
      'A web app that turns a single form into a polished, professional CV in both Arabic and English, with RTL-aware layouts and instant PDF export.',
    tags: ['React', 'i18n', 'PDF'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white">
          Featured <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-2 h-1 w-16 rounded bg-primary" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnceTight}
        className="mt-12 grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: '0 24px 48px -12px rgba(56, 189, 248, 0.18)',
            }}
            transition={hoverSpring}
            className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-surface p-8 transition-colors hover:border-primary/40"
          >
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={project.link}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
