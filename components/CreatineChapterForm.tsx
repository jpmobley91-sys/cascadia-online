"use client";

import Script from "next/script";

interface CreatineChapterFormProps {
  className?: string;
}

/**
 * Kit lead-magnet form for "The Creatine Chapter" (Chapter 5 of
 * Protein After 50).
 *
 * Uses Kit's HTML embed (not the JS embed) so the form renders inline
 * at this component's DOM position. Kit's full CSS stylesheet lives
 * in app/globals.css, scoped to [data-uid="abaccbc5bd"] so it doesn't
 * bleed onto other elements.
 *
 * Form copy, fields, and incentive email are managed in Kit
 * (Grow > Landing Pages & Forms > Free Creatine Chapter 5).
 *
 * On submit: Kit sends the double-opt-in confirmation email; on
 * confirm, the subscriber is redirected to the auto-deliver download
 * of the chapter PDF and receives an upsell button to the full book.
 */
export default function CreatineChapterForm({
  className = "",
}: CreatineChapterFormProps) {
  return (
    <div className={className}>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />

      <form
        action="https://app.kit.com/forms/9371578/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="9371578"
        data-uid="abaccbc5bd"
        data-format="inline"
        data-version="5"
        style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: "4px" }}
        min-width="400 500 600 700 800"
      >
        <div data-style="minimal">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                style={{
                  color: "rgb(0, 0, 0)",
                  borderColor: "rgb(227, 227, 227)",
                  borderRadius: "4px",
                  fontWeight: 400,
                }}
                aria-label="Email Address"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(22, 119, 190)",
                borderRadius: "4px",
                fontWeight: 400,
              }}
            >
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span>Send me Chapter 5</span>
            </button>
          </div>
          <div
            className="formkit-guarantee"
            style={{ color: "rgb(77, 77, 77)", fontSize: "13px", fontWeight: 400 }}
            data-element="guarantee"
          >
            We won&apos;t send you spam. Unsubscribe at any time.
          </div>
          <div className="formkit-powered-by-convertkit-container">
            <a
              href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
              data-element="powered-by"
              className="formkit-powered-by-convertkit"
              data-variant="dark"
              target="_blank"
              rel="nofollow noopener"
            >
              Built with Kit
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
