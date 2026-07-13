import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// Types each phrase, pauses, deletes it, then cycles to the next.
export const Typewriter = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1800,
  className,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span>{text}</span>
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1 inline-block h-[1.1em] w-[2px] bg-primary"
      />
    </span>
  )
}
