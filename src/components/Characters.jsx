import React from 'react';

const characters = [
  {
    name: 'Sprig',
    role: 'Woodland Sprite',
    bio: 'A curious leafling who waters crops at dawn. Loves dew drops and puns.',
    color: 'from-emerald-200 to-lime-200',
    emoji: '🌱',
  },
  {
    name: 'Ember',
    role: 'Firefly Guardian',
    bio: 'Glows brighter when your harvest thrives. Keeps pests away with a cozy sparkle.',
    color: 'from-amber-200 to-rose-200',
    emoji: '✨',
  },
  {
    name: 'Mallow',
    role: 'Marsh Witch',
    bio: 'Brews gentle growth tonics. A mentor with a sweet tooth for moon sugar.',
    color: 'from-fuchsia-200 to-pink-200',
    emoji: '🧪',
  },
  {
    name: 'Nimbus',
    role: 'Cloud Hopper',
    bio: 'Calls in soft rains for seedlings. Loves to nap on hay bales.',
    color: 'from-sky-200 to-cyan-200',
    emoji: '☁️',
  },
];

export default function Characters() {
  return (
    <section id="characters" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Meet the Creatures</h2>
        <p className="mt-3 text-slate-600">Befriend magical neighbors who lend a hand in the garden.</p>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((c) => (
          <li
            key={c.name}
            className="group relative rounded-xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md supports-[backdrop-filter]:bg-white/60"
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-xl bg-gradient-to-r ${c.color}`} />
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-2xl shadow-inner">
                <span aria-hidden>{c.emoji}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-rose-500">{c.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{c.bio}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Companion</span>
              <a
                href="#"
                className="text-xs font-semibold text-rose-600 underline decoration-rose-300/70 underline-offset-4 hover:text-rose-700"
              >
                View bio
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
