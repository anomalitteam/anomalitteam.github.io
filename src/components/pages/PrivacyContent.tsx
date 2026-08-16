"use client";

import { useT } from "@/lib/i18n/context";

export function PrivacyContent() {
  const { t } = useT();
  const p = t.privacy;

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {p.title}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">{p.lastUpdated}</p>

        <div className="mt-12 space-y-12">
          {p.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-text-primary">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-bg-secondary p-6">
          <p className="text-sm text-text-secondary">{p.contact}</p>
          <a
            href={`mailto:${p.contactEmail}`}
            className="mt-1 inline-block text-sm font-medium text-accent hover:underline"
          >
            {p.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
