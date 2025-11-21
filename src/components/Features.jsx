import { MapPin, CalendarRange, Clock, Activity, Mic, Link as LinkIcon, Users } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-blue-400/40 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-400/20">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">{title}</h3>
          <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    { icon: CalendarRange, title: 'Intelligent scheduling', desc: 'Auto-builds your day around hard constraints and preferences, across calendars.' },
    { icon: MapPin, title: 'Dynamic route optimization', desc: 'Calculates the most efficient sequence for errands with real-time traffic.' },
    { icon: Clock, title: 'Real-time adaptation', desc: 'Instantly re-plans when meetings move, traffic spikes, or stores close early.' },
    { icon: Activity, title: 'Proactive reminders', desc: 'Notifies you before issues arise and suggests fixes you can accept with one tap.' },
    { icon: Mic, title: 'Voice and text assistant', desc: 'Capture tasks hands-free. Ask “What should I do next?” and get an answer.' },
    { icon: LinkIcon, title: 'Deep integrations', desc: 'Connect maps, calendars, grocery delivery, and appointment booking services.' },
    { icon: Users, title: 'Family & team sharing', desc: 'Coordinate schedules and errands across households or small teams.' },
  ]

  return (
    <section id="features" className="relative py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for busy, real life</h2>
          <p className="mt-3 text-slate-300/90">Streamline combines scheduling, maps, and errands into one adaptive system that learns you over time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
