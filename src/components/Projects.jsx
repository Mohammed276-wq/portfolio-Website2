import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Workflow Automation',
    description:
      'Automation pipelines that connect LLMs with business tools to handle repetitive tasks end-to-end.',
    tags: ['AI', 'Automation', 'APIs'],
  },
  {
    title: 'Modern Web Application',
    description:
      'A responsive, performant single-page application built with React and a modern tooling stack.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Intelligent Chat Assistant',
    description:
      'A custom AI assistant integrated into a web interface for real-time, context-aware support.',
    tags: ['LLM', 'Chatbot', 'Integration'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-primary" />
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
