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

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-primary" />
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-white/5 bg-surface p-6"
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
      </div>
    </section>
  )
}
