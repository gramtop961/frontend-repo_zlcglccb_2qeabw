import Hero from './components/Hero'
import Features from './components/Features'
import Scenario from './components/Scenario'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Scenario />
      <Pricing />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Streamline. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-slate-300 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/test" className="hover:text-white transition-colors">System Test</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
