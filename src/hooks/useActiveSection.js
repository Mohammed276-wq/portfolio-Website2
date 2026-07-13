import { useEffect, useState } from 'react'

// Scroll-spy: returns the id of the section currently in the middle band
// of the viewport. Pass a stable (module-level) array of section ids.
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // a horizontal band around the viewport's middle
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
