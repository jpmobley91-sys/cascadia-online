"use client";

import Script from "next/script";
import type { ReactNode } from "react";

interface BuyBookButtonProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Kit Commerce buy button for "Protein After 50".
 *
 * Renders a styled anchor that Kit's commerce.js intercepts on click,
 * opening Stripe checkout as a modal overlay on the current domain
 * (no redirect to cascadia-fitness.kit.com).
 *
 * Script deduplication: Next.js's Script component tracks loaded
 * sources by id. Mounting this component multiple times on a page
 * only loads commerce.js once.
 *
 * Usage:
 *   import BuyBookButton from "@/components/BuyBookButton";
 *   <BuyBookButton className="bg-forest text-cream px-8 py-4" />
 */
export default function BuyBookButton({
  className = "",
  children = "Read Protein After 50 — $27",
}: BuyBookButtonProps) {
  return (
    <>
      <Script
        id="kit-commerce"
        src="https://cascadia-fitness.kit.com/commerce.js"
        strategy="lazyOnload"
      />
      <a
        href="https://cascadia-fitness.kit.com/products/protein-after-50?step=checkout"
        data-commerce
        className={className}
      >
        {children}
      </a>
    </>
  );
}
