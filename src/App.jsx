import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FloatingNav } from './components/ui/floating-navbar'

// Below-the-fold sections are code-split and loaded after the hero paints
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' },
]

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background">
        <Navbar />
        <FloatingNav navItems={navItems} />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </MotionConfig>
  )
}
