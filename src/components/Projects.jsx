import { motion } from 'framer-motion'
import { HoverEffect } from './ui/card-hover-effect'

const projects = [
  {
    title: 'AI Workflow Automation',
    description:
      'Automation pipelines that connect LLMs with business tools to handle repetitive tasks end-to-end.',
    tags: ['AI', 'Automation', 'APIs'],
    link: '#projects',
  },
  {
    title: 'Modern Web Application',
    description:
      'A responsive, performant single-page application built with React and a modern tooling stack.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#projects',
  },
  {
    title: 'Intelligent Chat Assistant',
    description:
      'A custom AI assistant integrated into a web interface for real-time, context-aware support.',
    tags: ['LLM', 'Chatbot', 'Integration'],
    link: '#projects',
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <HoverEffect items={projects} className="mt-6" />
      </motion.div>
    </section>
  )
}
