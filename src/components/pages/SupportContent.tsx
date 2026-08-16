"use client";

import { useT } from "@/lib/i18n/context";

export function SupportContent() {
  const { t } = useT();
  const s = t.support;

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {s.title}
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          {s.intro}
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-bg-secondary p-6 sm:p-8">
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            {s.emailLabel}
          </p>
          <a
            href={`mailto:${s.email}`}
            className="mt-2 inline-block text-xl font-semibold text-accent hover:underline"
          >
            {s.email}
          </a>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-text-primary">
            {s.infoTitle}
          </h2>
          <ul className="mt-4 space-y-2">
            {s.infoItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-sm text-text-secondary">{s.responseTime}</p>
      </div>
    </div>
  );
}
