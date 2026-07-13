import { motion } from 'framer-motion'

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

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
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
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
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
