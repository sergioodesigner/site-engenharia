import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <PracticeAreas />
      </main>
      <Footer />
    </div>
  )
}