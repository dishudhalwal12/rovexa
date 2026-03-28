import { PageShell } from "@/components/layout/page-shell";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoonPage({
  eyebrow,
  title,
  description
}: ComingSoonPageProps) {
  return (
    <PageShell>
      <main className="flex flex-1 items-center justify-center py-16">
        <section className="liquid-card max-w-3xl rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
          <p className="glass-pill mx-auto inline-flex px-4 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--accent)]">
            {eyebrow}
          </p>
          <h1 className="font-heading mt-5 text-balance text-4xl font-bold tracking-[-0.06em] md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-[var(--muted)] md:text-lg">
            {description}
          </p>
        </section>
      </main>
    </PageShell>
  );
}
