import { motion } from 'framer-motion'
import { container, fadeUp as item, viewportOnce, viewportOnceTight, hoverSpring } from '../lib/animations'

const skillGroups = [
  {
    category: 'AI & Automation',
    skills: ['LLM Integration', 'Prompt Engineering', 'Workflow Automation', 'API Orchestration'],
  },
  {
    category: 'Front-End',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Vite', 'Node.js', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-white">
          My <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.div variants={item} className="mt-2 h-1 w-16 rounded bg-primary" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnceTight}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            whileHover={{ y: -6 }}
            transition={hoverSpring}
            className="rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-primary/30"
          >
            <h3 className="text-lg font-semibold text-white">{group.category}</h3>
            <ul className="mt-4 space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
