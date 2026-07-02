import { CursorGlow } from "./components/ui/CursorGlow"
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { MarqueeStrip } from "./components/sections/MarqueeStrip"
import { Features } from "./components/sections/Features"
import { Showcase } from "./components/sections/Showcase"
import { Stats } from "./components/sections/Stats"
import { CTA } from "./components/sections/CTA"
import { Footer } from "./components/sections/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-white">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Features />
        <Showcase />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
