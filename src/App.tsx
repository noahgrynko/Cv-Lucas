import { MotionConfig } from 'framer-motion'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { GridBackground } from './components/GridBackground'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { CTA } from './sections/CTA'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Interests } from './sections/Interests'
import { Mindset } from './sections/Mindset'
import { Mission } from './sections/Mission'
import { Objective } from './sections/Objective'
import { Profile } from './sections/Profile'
import { WhyCyber } from './sections/WhyCyber'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <div className="noise-overlay" />
      <GridBackground />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Profile />
        <Interests />
        <Mindset />
        <Mission />
        <Objective />
        <WhyCyber />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
