import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Cascadia Fitness",
  description:
    "Cascadia Fitness 14-day satisfaction guarantee on Protein After 50 and all digital products. Full refunds, no questions asked.",
};

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.18em] text-xs text-teal mb-4">
            Cascadia Fitness Press
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-forest mb-6">
            Refund Policy
          </h1>

          <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-10">
            We sell digital books and tools to people who care about their
            long-term health. That relationship only works if it&apos;s built on
            trust — so our refund policy is simple, generous, and honest.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            14-Day Satisfaction Guarantee
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            If Protein After 50 — or any digital product we sell — doesn&apos;t
            deliver what we promised, reply to your receipt within 14 days of
            purchase and we&apos;ll refund you in full.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-10">
            No forms. No follow-up questions. No interrogation. We&apos;d rather
            lose $27 than your trust.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            How It Works
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-charcoal/80 leading-relaxed mb-10">
            <li>
              Reply to the receipt email you received at purchase, or email{" "}
              <a
                href="mailto:jpmobley91@gmail.com"
                className="text-teal underline underline-offset-4 hover:text-forest"
              >
                jpmobley91@gmail.com
              </a>
            </li>
            <li>
              Include your order number (it&apos;s in the receipt) and we&apos;ll
              handle the rest
            </li>
            <li>Refunds are processed within 2 business days</li>
            <li>
              The refunded amount appears on your statement within 5–10 days,
              depending on your bank
            </li>
            <li>
              The PDF is yours to keep — there&apos;s nothing for us to &ldquo;take
              back&rdquo;
            </li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            What&apos;s Covered
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            The 14-day guarantee applies to all digital products purchased
            directly through{" "}
            <a
              href="http://cascadiafitness.online"
              className="text-teal underline underline-offset-4 hover:text-forest"
            >
              cascadiafitness.online
            </a>
            , including Protein After 50 and any future books, courses, or
            downloadable tools.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            The guarantee does not apply to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-charcoal/80 leading-relaxed mb-10">
            <li>
              Free resources (newsletters, blog posts, the protein calculator,
              free chapter downloads) — these are free, so there&apos;s nothing
              to refund
            </li>
            <li>
              Purchases made through third-party platforms (Amazon, Apple Books,
              etc.) if we ever distribute there in the future — those refunds
              are handled by the platform under their own terms
            </li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            Why We Offer This
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Cascadia Fitness exists to put evidence-based health information in
            front of people who want to make better decisions. If a book we
            wrote doesn&apos;t earn its place in your life, we shouldn&apos;t
            keep your money.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-10">
            Refunds are not a loophole. They&apos;re the cost of being
            trustworthy.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4">
            Questions
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            For any refund-related questions, email{" "}
            <a
              href="mailto:jpmobley91@gmail.com"
              className="text-teal underline underline-offset-4 hover:text-forest"
            >
              jpmobley91@gmail.com
            </a>{" "}
            and we&apos;ll respond within 1 business day.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-10">
            For all other questions, see our{" "}
            <a
              href="https://cascadiafitness.org/contact"
              className="text-teal underline underline-offset-4 hover:text-forest"
            >
              Contact
            </a>{" "}
            page or{" "}
            <a
              href="https://cascadiafitness.org"
              className="text-teal underline underline-offset-4 hover:text-forest"
            >
              FAQ
            </a>
            .
          </p>

          <div className="mt-12 pt-6 border-t border-stone/50">
            <p className="text-xs text-charcoal/50 italic leading-relaxed">
              Educational content, not medical advice. Cascadia Fitness is a
              research and education platform — your physician makes the call
              on what&apos;s right for your body.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-teal underline underline-offset-4 hover:text-forest text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
