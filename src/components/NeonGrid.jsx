import React from 'react'

function NeonGrid({ className = '' }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-30 mix-blend-screen ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gridStroke" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      {
        Array.from({ length: 50 }).map((_, i) => (
          <g key={i}>
            <line x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="url(#gridStroke)" strokeWidth="0.05" opacity="0.35" />
            <line x1="0" y1={i * 2} x2="100" y2={i * 2} stroke="url(#gridStroke)" strokeWidth="0.05" opacity="0.35" />
          </g>
        ))
      }
    </svg>
  )
}

export default NeonGrid
