import React from 'react'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      {/* Additional sections could follow */}
      <section id="start" className="relative z-10 bg-black/70 text-white">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Launch with confidence</h2>
          <p className="mt-3 text-white/70 max-w-2xl">We design, build, and automate Web3 products and workflows. Tell us about your goals, and we will architect the path from concept to scale.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Strategy", "Automation", "Security"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h3 className="font-medium">{item}</h3>
                <p className="mt-2 text-sm text-white/70">Premium consulting and implementation for elite teams.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
