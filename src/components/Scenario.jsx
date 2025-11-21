function Scenario() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">A day, actually streamlined</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              You need to drop off the kids, attend a meeting, pick up dry cleaning, and buy groceries. Streamline computes the best sequence and route, honoring school drop-off times, meeting locations, and store hours — and repaths on the fly if traffic changes.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li className="flex gap-3"><span className="text-blue-400">•</span> Prioritizes time windows and travel time</li>
              <li className="flex gap-3"><span className="text-blue-400">•</span> Suggests instant actions like ordering groceries ahead</li>
              <li className="flex gap-3"><span className="text-blue-400">•</span> Keeps everyone informed with proactive notifications</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="rounded-lg bg-slate-900/60 border border-white/10 p-4">
                  <p className="text-white font-semibold">Morning plan</p>
                  <p className="text-slate-300">Drop off kids → Meeting downtown → Dry cleaning → Groceries</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 border border-white/10 p-4">
                  <p className="text-white font-semibold">Traffic alert</p>
                  <p className="text-slate-300">Heavy congestion near school. Re-routing and moving groceries to delivery.</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 border border-white/10 p-4">
                  <p className="text-white font-semibold">Updated route</p>
                  <p className="text-slate-300">Meeting → School (new window) → Dry cleaning → Delivery window 6–7pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scenario
