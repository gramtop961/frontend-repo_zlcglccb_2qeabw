function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, freemium pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Upgrade when you want deeper integrations, predictive analytics, and sharing.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <p className="text-slate-200 font-semibold">Free</p>
            <h3 className="text-4xl font-extrabold text-white mt-2">$0</h3>
            <ul className="mt-4 space-y-2 text-slate-300/90 text-sm">
              <li>• Intelligent scheduling</li>
              <li>• Basic route optimization</li>
              <li>• Voice and text capture</li>
              <li>• Calendar and maps sync</li>
            </ul>
            <a href="#" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15">Get started</a>
          </div>

          <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 backdrop-blur p-6">
            <p className="text-blue-200 font-semibold">Premium</p>
            <div className="flex items-end gap-2 mt-2">
              <h3 className="text-4xl font-extrabold text-white">$9</h3>
              <span className="text-slate-300">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-100 text-sm">
              <li>• Deep third‑party integrations</li>
              <li>• Predictive task analytics</li>
              <li>• Family/team sharing</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20">Upgrade</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
