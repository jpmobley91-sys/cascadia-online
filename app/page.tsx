// app/page.tsx
// Cascadia Fitness — "Protein After 50" landing page
// Replace KIT_CHECKOUT_URL and KIT_FORM_EMBED when Kit Commerce is configured.

import Image from "next/image";
import BuyBookButton from "@/components/BuyBookButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* ============ HERO ============ */}
      <section className="px-6 py-16 md:py-24 border-b border-stone/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          {/* Cover */}
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/protein-after-50-cover.png"
              alt="Protein After 50 — Evidence-Based Strategies for Muscle, Strength, and Independence"
              width={4406}
              height={7031}
              priority
              className="w-64 md:w-full shadow-xl rounded-sm overflow-hidden"
            />
          </div>

          {/* Copy */}
          <div className="md:col-span-3">
            <p className="uppercase tracking-[0.18em] text-xs text-teal mb-4">Cascadia Fitness Press</p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4 text-forest">
              Protein After 50
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 mb-6 leading-snug">
              Evidence-Based Strategies for Muscle, Strength, and Independence
            </p>
            <p className="text-base text-charcoal/70 mb-8 leading-relaxed">
              Built on 239 peer-reviewed studies. Zero supplement sponsors.
            </p>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div>
                <span className="font-serif text-4xl text-forest">$27</span>
                <span className="text-charcoal/60 ml-2 text-sm">introductory</span>
              </div>
              <BuyBookButton className="inline-flex items-center justify-center bg-forest hover:bg-forest/90 text-cream px-8 py-4 rounded-sm text-base font-medium tracking-wide transition-colors" />
            </div>
            <p className="text-xs text-charcoal/50 italic">
              Launch price — increases to $37 after initial reader reviews.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF (placeholder container) ============ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 text-teal/30" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>
          <h2 className="font-serif text-center text-2xl md:text-3xl text-forest mb-12">
            Early reader reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-cream border border-stone/50 p-6 rounded-sm min-h-[180px] flex items-center justify-center"
              >
                <p className="text-charcoal/30 italic text-sm text-center">
                  Testimonial {i} — add after first readers respond
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="px-6 py-20 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.18em] text-xs text-teal mb-4 text-center">Inside the book</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-12 text-center">
            Eight chapters. One honest map.
          </h2>

          <ol className="space-y-6">
            {CHAPTERS.map((ch, idx) => (
              <li key={idx} className="flex gap-5 items-start border-b border-stone/40 pb-6 last:border-b-0">
                <span className="font-serif text-3xl text-teal/60 leading-none shrink-0 w-10">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-forest mb-1">{ch.title}</h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed">{ch.hook}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FREE CHAPTER CTA ============ */}
      <section className="px-6 py-20 bg-forest text-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Not ready to buy? Start with the free Creatine Chapter.
          </h2>
          <p className="text-cream/80 mb-8 leading-relaxed">
            Ten pages. Seventeen studies. The most misunderstood supplement for aging,
            unpacked without hype. We&apos;ll email the PDF immediately.
          </p>

          {/* Kit embed goes here. Replace the div below with Kit's form embed code,
              OR keep this structure and connect via Kit's JS snippet. */}
          <div id="kit-form-creatine-chapter" className="max-w-md mx-auto">
            {/* TODO: Paste Kit form embed HTML/JS here.
                Form should tag subscribers "creatine_chapter_lead". */}
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-sm bg-cream text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button
                type="submit"
                className="bg-teal hover:bg-teal/90 px-6 py-3 rounded-sm text-cream font-medium transition-colors"
              >
                Send the chapter
              </button>
            </form>
            <p className="text-cream/50 text-xs mt-4">
              One-click unsubscribe. We never sell your email.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.18em] text-xs text-teal mb-4">About</p>
          <h2 className="font-serif text-3xl text-forest mb-6">Cascadia Fitness</h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              Cascadia Fitness is an independent, research-driven wellness platform based in
              Portland, Oregon. We do three things: research, educate, connect. We take no
              supplement sponsors, sell no coaching packages, and have no quotas to hit.
            </p>
            <p>
              The free library lives at{" "}
              <a
                href="https://cascadiafitness.org"
                className="text-teal underline underline-offset-4 hover:text-forest"
              >
                cascadiafitness.org
              </a>
              {" "}— ten theme pages, a protein calculator, a sleep assessment, and a research
              blog. The book is for readers who want the full protocol in one place.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-stone/50">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              <strong className="text-charcoal/70">Educational disclaimer:</strong>{" "}
              Cascadia Fitness publishes evidence-based educational content. Nothing here
              constitutes medical advice, diagnosis, or treatment. Consult your physician
              before changing diet, supplementation, or exercise — especially if you have
              kidney disease, take prescription medications, or have been diagnosed with any
              condition affected by dietary protein.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-6 py-10 bg-charcoal text-cream/70 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Cascadia Fitness. Portland, Oregon.</p>
          <div className="flex gap-6">
            <a href="https://cascadiafitness.org" className="hover:text-cream">cascadiafitness.org</a>
            <a href="https://cascadiafitness.org/contact" className="hover:text-cream">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const CHAPTERS = [
  {
    title: "The Quiet Crisis",
    hook: "Why protein, strength, and grip predict your independence at 80.",
  },
  {
    title: "The Protein Math",
    hook: "The 1.2–1.6 g/kg target and the leucine threshold.",
  },
  {
    title: "The Meal Blueprint",
    hook: "Five 15-minute breakfast templates that cross the threshold.",
  },
  {
    title: "Fuel Without an Engine",
    hook: "The resistance-training pairing that makes protein work.",
  },
  {
    title: "The Creatine Chapter",
    hook: "17 studies on the most misunderstood supplement for aging.",
  },
  {
    title: "The Plant Protein Question",
    hook: "Not advocacy, not dismissal, just the data.",
  },
  {
    title: "The Bigger Picture",
    hook: "Sleep, mTOR, and the longevity stack.",
  },
  {
    title: "Your Next Move",
    hook: "Three actions this week, one conversation with your doctor.",
  },
];
