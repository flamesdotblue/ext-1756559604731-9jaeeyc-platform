import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <header className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
          Cozy • Magical • Farming
        </span>
        <h1 className="mt-4 bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-500 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-sm md:text-6xl">
          Pixel Bloom
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-100 md:text-lg">
          Plant dreams, befriend whimsical creatures, and celebrate the seasons in a hand-crafted pixel world.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-6 py-3 text-white shadow-lg shadow-rose-500/30 transition hover:translate-y-[-1px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            aria-label="Wishlist Pixel Bloom on Steam"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5l3.09 6.26 6.91 1.01-5 4.87 1.18 6.86L12 16.77l-6.18 3.23L7 12.64l-5-4.87 6.91-1.01L12 .5z" />
            </svg>
            Wishlist on Steam
          </a>
          <a
            href="#trailer"
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-6 py-3 text-slate-800 shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
            </svg>
            Watch trailer
          </a>
        </div>
      </div>
    </header>
  );
}
