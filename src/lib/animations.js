// Shared entrance animations so every section moves with the same rhythm.
export const STAGGER = 0.15

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Shared viewport settings for whileInView sections
export const viewportOnce = { once: true, margin: '-100px' }
export const viewportOnceTight = { once: true, margin: '-80px' }

// Shared hover spring for lifting cards
export const hoverSpring = { type: 'spring', stiffness: 300, damping: 22 }
