import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FloatingNav } from './components/ui/floating-navbar'

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingNav navItems={navItems} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
