import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(59,130,246,0.35),transparent)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-blue-300/90 text-sm font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AI-powered personal logistics
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Streamline your day with an assistant that plans, adapts, and optimizes
            </h1>
            <p className="mt-4 md:mt-6 text-slate-200/90 text-base md:text-lg leading-relaxed">
              Meet Streamline — your proactive scheduler that learns your preferences, coordinates errands, and navigates around traffic so you can focus on what matters.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors">
                Get Started Free
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 backdrop-blur transition-colors">
                See how it works
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-300/70">Available via voice and text • Works with your calendars and maps</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
