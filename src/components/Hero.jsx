import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import NeonGrid from './NeonGrid'

const gradients = [
  'from-[#0b1220] via-[#090a1a] to-[#0a0f1e]',
  'from-[#0b0f1e] via-[#0f0b23] to-[#0a0e1c]',
]

function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [0, 1], [8, -8])
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8])
  const glow = useTransform(mouseX, [0, 0.5, 1], [0.25, 0.6, 0.25])
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="container relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#05060A] via-[#080A12] to-[#0A0F1D] text-white"
    >
      {/* Soft cosmic radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 h-[60vw] w-[60vw] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.55),_transparent_60%)]" />
        <div className="absolute -bottom-40 -right-32 h-[55vw] w-[55vw] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.55),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      </div>

      {/* Holographic grid */}
      <NeonGrid />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] pointer-events-none" />

      {/* Glow rings reacting to mouse */}
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[90vmin] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(167,139,250,0.15),rgba(34,211,238,0.15),rgba(96,165,250,0.15),rgba(167,139,250,0.15))] blur-[80px]" />
      </motion.div>

      {/* Minimal nav */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.35)]" />
          <span className="text-sm md:text-base tracking-widest uppercase text-white/80">Web3 Co.</span>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur-md hover:bg-white/10 transition">Early Access</button>
      </div>

      {/* Centered hero copy */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-balance text-2xl leading-snug md:text-5xl md:leading-tight font-semibold tracking-tight"
        >
          Empowering Businesses with Next-Generation Web3 Solutions.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-base md:text-2xl text-white/80"
        >
          Build. Automate. Scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
          className="mt-8"
        >
          <a
            href="#start"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-fuchsia-600/30 to-cyan-500/30 px-6 py-3 text-sm md:text-base font-medium text-white shadow-[0_0_24px_rgba(8,145,178,0.25)] backdrop-blur-md transition hover:border-cyan-300/60 hover:shadow-[0_0_36px_rgba(34,211,238,0.35)]"
          >
            Start Your Project
            <ArrowRight className="size-4 md:size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute size-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.6)] animate-[floaty_12s_ease-in-out_infinite]"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 83) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          25% { transform: translateY(-12px) translateX(6px); opacity: 0.9; }
          50% { transform: translateY(0) translateX(0); opacity: 0.6; }
          75% { transform: translateY(12px) translateX(-6px); opacity: 0.85; }
        }
      `}</style>
    </section>
  )
}

export default Hero
