import NavBar from './components/nav-bar'
import HeroBanner from './components/HeroBanner'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Premium Navigation Bar */}
      <NavBar />

      <main className="pt-20">
        <HeroBanner />
      </main>
    </div>
  )
}
