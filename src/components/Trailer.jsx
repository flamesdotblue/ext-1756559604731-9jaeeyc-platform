import React from 'react';

export default function Trailer() {
  return (
    <section id="trailer" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Gameplay Trailer</h2>
        <p className="mt-3 text-slate-600">Peek into a day on the farm — from sunrise sprouting to starry-night festivals.</p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="Pixel Bloom Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

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
          href="#characters"
          className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-slate-800 shadow transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
        >
          Meet the Creatures
        </a>
      </div>
    </section>
  );
}
