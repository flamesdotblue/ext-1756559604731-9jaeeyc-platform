import React from 'react';
import Hero from './components/Hero';
import Characters from './components/Characters';
import SeasonalEvents from './components/SeasonalEvents';
import Trailer from './components/Trailer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-sky-50 text-slate-800">
      <Hero />
      <main className="relative z-10">
        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Grow, befriend, and bloom with magic</h2>
            <p className="mt-4 text-lg text-slate-600">
              Pixel Bloom is a cozy farming simulator where your harvests hum with magic and the forest friends help your garden glow. Tend your plot, craft potions, and celebrate whimsical seasonal festivals.
            </p>
          </div>
        </section>
        <Characters />
        <SeasonalEvents />
        <Trailer />
      </main>
      <footer className="border-t border-white/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Pixel Bloom. All rights reserved.</p>
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 text-white shadow-sm transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            aria-label="Wishlist Pixel Bloom on Steam"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l6 6L20 6" />
            </svg>
            Wishlist on Steam
          </a>
        </div>
      </footer>
    </div>
  );
}
