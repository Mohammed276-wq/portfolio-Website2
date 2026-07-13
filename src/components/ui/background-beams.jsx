import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// Aceternity UI "Background Beams" (via 21st.dev). The original ships a
// hardcoded 50-path array; the paths form an arithmetic progression
// (x + 7i, y - 8i), so they are generated here instead.
const beamPath = (i) => {
  const p = (a, b) => `${a + 7 * i} ${b - 8 * i}`
  return `M${p(-380, -189)}C${p(-380, -189)} ${p(-312, 216)} ${p(152, 343)}C${p(616, 470)} ${p(684, 875)} ${p(684, 875)}`
}

const paths = Array.from({ length: 50 }, (_, i) => beamPath(i))

export const BackgroundBeams = React.memo(function BackgroundBeams({ className }) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]',
        className,
      )}
    >
      <svg
        className="pointer-events-none absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={Array.from({ length: 58 }, (_, i) => beamPath(i)).join('')}
          stroke="url(#beams-radial)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        />
        {paths.map((d, index) => (
          <motion.path
            key={`path-${index}`}
            d={d}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              key={`gradient-${index}`}
              id={`linearGradient-${index}`}
              initial={{ x1: '0%', x2: '0%', y1: '0%', y2: '0%' }}
              animate={{
                x1: ['0%', '100%'],
                x2: ['0%', '95%'],
                y1: ['0%', '100%'],
                y2: ['0%', `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="32.5%" stopColor="#6344F5" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          ))}
          <radialGradient
            id="beams-radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="#d4d4d4" />
            <stop offset="0.243243" stopColor="#d4d4d4" />
            <stop offset="0.43594" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
})
