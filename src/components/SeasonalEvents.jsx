import React from 'react';

const events = [
  {
    title: 'Spring Blossom Fair',
    desc: 'Plant wish-seeds, trade sprouts, and welcome new critters to town.',
    accent: 'from-emerald-300/60 to-lime-300/60',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5 5 0 015 5 5 5 0 11-10 0 5 5 0 015-5zm0 9c-4 0-8 3-8 7v2h16v-2c0-4-4-7-8-7z" />
      </svg>
    ),
  },
  {
    title: 'Summer Firefly Jamboree',
    desc: 'Night markets, music, and glow-bottle crafting under warm skies.',
    accent: 'from-amber-300/60 to-rose-300/60',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 19 12 15.77 7.82 19 9 12.64 4 9l5.91-.74L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Autumn Harvest Parade',
    desc: 'Showcase giant pumpkins, bake moon pies, and share hearty stews.',
    accent: 'from-orange-300/60 to-amber-300/60',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c4.97 0 9-4.03 9-9S16.97 4 12 4 3 8.03 3 13s4.03 9 9 9z" />
      </svg>
    ),
  },
  {
    title: 'Winter Starfall Gala',
    desc: 'Catch starlight flakes, gift hot cocoa, and craft frost charms.',
    accent: 'from-sky-300/60 to-indigo-300/60',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

export default function SeasonalEvents() {
  return (
    <section id="events" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Seasonal Events</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Celebrate each season with cozy festivals, unique quests, and limited-time crops.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {events.map((e) => (
          <div key={e.title} className="relative overflow-hidden rounded-xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className={`pointer-events-none absolute -inset-1 opacity-60 blur-xl bg-gradient-to-br ${e.accent}`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-rose-600 shadow">
                {e.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{e.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{e.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
