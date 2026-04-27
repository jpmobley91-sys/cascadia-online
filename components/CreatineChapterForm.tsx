"use client";

import Script from "next/script";

interface CreatineChapterFormProps {
  className?: string;
}

/**
 * Kit lead-magnet form for "The Creatine Chapter" (Chapter 5 of
 * Protein After 50).
 *
 * Renders Kit's hosted form inline. On email submit, Kit sends a
 * double-opt-in confirmation email; on confirm, the subscriber is
 * redirected to the auto-deliver download of the chapter PDF.
 *
 * Form copy, colors, and field configuration are managed inside
 * Kit (Grow > Landing Pages & Forms > Free Creatine Chapter 5),
 * not here. This component only supplies the container and loads
 * Kit's form-rendering script.
 *
 * Script deduplication: Next.js's Script component tracks loaded
 * sources by id. Mounting this component multiple times on a page
 * only loads the form script once.
 */
export default function CreatineChapterForm({
  className = "",
}: CreatineChapterFormProps) {
  return (
    <div className={className}>
      <Script
        id="kit-creatine-chapter-form"
        src="https://cascadia-fitness.kit.com/abaccbc5bd/index.js"
        data-uid="abaccbc5bd"
        strategy="lazyOnload"
        async
      />
    </div>
  );
}
