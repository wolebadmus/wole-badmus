import Image from "next/image";
import Link from "next/link";

export default function Page3() {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Decorative background shapes - lines/geometric */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal lines top right */}
        <div className="absolute top-0 right-0 w-96 h-96">
          <div className="absolute top-16 right-16 w-64 h-px bg-teal-500/30 rotate-45"></div>
          <div className="absolute top-24 right-8 w-48 h-px bg-zinc-700 rotate-45"></div>
          <div className="absolute top-8 right-32 w-32 h-px bg-teal-500/20 rotate-45"></div>
        </div>
        {/* Diagonal lines bottom left */}
        <div className="absolute bottom-0 left-0 w-96 h-96">
          <div className="absolute bottom-16 left-16 w-64 h-px bg-teal-500/30 -rotate-45"></div>
          <div className="absolute bottom-24 left-8 w-48 h-px bg-zinc-700 -rotate-45"></div>
          <div className="absolute bottom-8 left-32 w-32 h-px bg-teal-500/20 -rotate-45"></div>
        </div>
        {/* Floating dots */}
        <div className="absolute top-1/4 right-[10%] w-1.5 h-1.5 rounded-full bg-teal-500/40"></div>
        <div className="absolute top-[45%] left-[5%] w-2 h-2 rounded-full bg-teal-500/30"></div>
        <div className="absolute top-[65%] right-[15%] w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
        <div className="absolute bottom-[35%] left-[12%] w-1 h-1 rounded-full bg-teal-500/40"></div>
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-teal-500/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-teal-500/20"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-800/90 backdrop-blur-sm border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <span className="text-sm text-zinc-100 font-medium">Wole Badmus</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-zinc-400 hover:text-teal-400 transition-colors">1</Link>
            <Link href="/page-2" className="text-xs text-zinc-400 hover:text-teal-400 transition-colors">2</Link>
            <Link href="/page-3" className="text-xs text-teal-400 border-b border-teal-400 pb-0.5">3</Link>
            <span className="text-zinc-600">|</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Single Card */}
      <main className="max-w-7xl mx-auto px-8 py-12 md:py-16 relative z-10">
        <div className="bg-zinc-800/50 rounded-2xl border border-zinc-700/50 p-8 md:p-16">

          {/* Hero Section */}
          <section className="pb-16 border-b border-zinc-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              {/* Left - Name & Title */}
              <div className="flex-1">
                <p className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-4">Industrial Strategist</p>
                <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 leading-tight mb-4">
                  Wole<br />Badmus
                </h1>
                <p className="text-xl text-zinc-400">
                  Industrial Capacity &<br />Performance Strategist
                </p>
              </div>

              {/* Right - Photo */}
              <div className="shrink-0 relative">
                <div className="absolute -inset-2 bg-teal-500/20 rounded-xl -rotate-2"></div>
                <Image
                  src="/placeholder.png"
                  alt="Wole Badmus"
                  width={450}
                  height={450}
                  className="relative rounded-xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Section 1: The Money Leak */}
          <section className="py-16 border-b border-zinc-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-teal-500"></div>
              <h2 className="text-sm font-semibold text-zinc-100 tracking-wider uppercase">
                The Money Leak Most Industrial Organizations Normalize
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Most industrial operations don&apos;t lose money in catastrophic failure. They lose it in normalization. Minor stops. Recurring adjustments. Chronic operator intervention. PM tasks completed, yet the same components fail again. Throughput that never quite reaches nameplate — but no one can isolate the constraint.
              </p>

              <p className="text-teal-400 font-semibold text-lg">This is the money leak.</p>

              <p className="font-medium text-zinc-200">Globally:</p>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Unplanned downtime consumes <strong className="text-zinc-100">5–20%</strong> of productive capacity annually.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Maintenance represents <strong className="text-zinc-100">15–40%</strong> of operating cost in asset-intensive industries.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Reactive maintenance can cost <strong className="text-zinc-100">3–5 times more</strong> than planned intervention when lost production is factored in.</p>
                </li>
              </ul>

              <p>
                In environments where capital approval cycles are slow, FX volatility impacts spare procurement, and aging assets dominate — such as many manufacturing sites across West Africa — the impact compounds.
              </p>

              <p className="text-zinc-100 font-medium">
                But the deeper issue is not maintenance effort. It is structural misalignment.
              </p>

              <ul className="space-y-3">
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>PM programs disconnected from component behavior</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Downtime data lacking diagnostic clarity</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Spare strategy not tied to risk ranking</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Equipment constraints masked as operational variability</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Capital decisions made before existing capacity is fully recovered</p>
                </li>
              </ul>

              <p>
                When these misalignments persist, organizations compensate with:
              </p>

              <ul className="space-y-3">
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Incremental capital upgrades</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Vendor-driven solutions</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Increased maintenance spend</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Operational workarounds</p>
                </li>
              </ul>

              <p>Instead of structural correction.</p>

              <p>
                In many cases, independent system-level analysis reveals recoverable throughput and cost stability before new capital is deployed. Capacity recovery is often more economical than capital expansion — if failure drivers are exposed early and execution priorities are sequenced correctly.
              </p>

              <p className="italic text-zinc-400 border-l-2 border-teal-500/50 pl-4">
                Until then, the system continues to leak. Quietly. And consistently.
              </p>
            </div>
          </section>

          {/* Section 2: Why Independent Analysis */}
          <section className="py-16 border-b border-zinc-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-teal-500"></div>
              <h2 className="text-sm font-semibold text-zinc-100 tracking-wider uppercase">
                Why Independent System-Level Analysis Matters
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Internal teams are optimized for daily execution under pressure. Few are structured to step back and redesign the system architecture itself — to align maintenance structure, asset behavior, throughput constraints, and capital decisions into a single performance strategy.
              </p>

              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6">
                <p className="text-teal-300 font-medium">
                  That is where structural capacity recovery begins.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Background */}
          <section className="pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-teal-500"></div>
              <h2 className="text-sm font-semibold text-zinc-100 tracking-wider uppercase">Background</h2>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Wole Badmus specializes in structural capacity recovery within material handling systems — including filling, dosing, conveying, packaging systems & automation, solids handling, and maintenance & reliability architecture.
              </p>

              <p>
                He operates at the intersection of equipment mechanics, maintenance structure, throughput economics, and capital decision discipline — identifying where system behavior, not personnel performance, is silently limiting output and inflating cost.
              </p>

              <p>
                His industrial experience spans complex manufacturing environments including <strong className="text-zinc-100">ExxonMobil</strong>, <strong className="text-zinc-100">BASF</strong>, <strong className="text-zinc-100">Schwan&apos;s Company</strong>, <strong className="text-zinc-100">Igloo Products</strong>, and multi-site operations across North America and West Africa. He has led and supported revamp and retrofit initiatives exceeding <strong className="text-zinc-100">$200M in capital scope</strong> and developed component-based preventive maintenance frameworks across high-speed filling, solids handling, and packaging systems.
              </p>

              <p className="font-medium text-zinc-200">His work focuses on:</p>

              <ul className="space-y-3">
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Ranking failure drivers by measurable production impact</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Recovering hidden capacity before capital expansion decisions</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Converting task-based PM programs into component-driven reliability structures</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Aligning spare parts strategy with operational risk and procurement realities</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">*</span>
                  <p>Sequencing execution priorities to stabilize throughput and deter unnecessary capital</p>
                </li>
              </ul>

              <p>
                Rather than treating reliability as a maintenance function alone, his approach integrates system diagnostics, performance stabilization, and capital governance into a single structured recovery strategy.
              </p>

              <p>
                Wole holds a <strong className="text-zinc-100">master&apos;s degree in Subsea & Mechanical Engineering</strong> and has taught engineering at the <strong className="text-zinc-100">University of Houston</strong> and <strong className="text-zinc-100">Indiana State University</strong>. His perspective on structural workforce participation and industrial competitiveness was referenced in <strong className="text-zinc-100">The New York Times</strong> in &ldquo;The Vanishing Male Worker: How America Fell Behind.&rdquo;
              </p>
            </div>
          </section>

          {/* Thank You */}
          <section className="text-center pt-16">
            <p className="text-zinc-500 text-sm">Thank you for visiting.</p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Wole Badmus</p>
        </div>
      </footer>
    </div>
  );
}
