import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-charcoal text-cream/70 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© {new Date().getFullYear()} Cascadia Fitness. Portland, Oregon.</p>
        <div className="flex gap-6">
          <a href="https://cascadiafitness.org" className="hover:text-cream">cascadiafitness.org</a>
          <a href="https://cascadiafitness.org/contact" className="hover:text-cream">Contact</a>
          <Link href="/refunds" className="hover:text-cream">Refunds</Link>
        </div>
      </div>
    </footer>
  );
}
