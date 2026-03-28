import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-heading text-4xl font-bold tracking-[-0.06em] text-[var(--foreground)] md:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-heading mt-12 text-3xl font-bold tracking-[-0.05em] text-[var(--foreground)]"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg" {...props} />
  ),
  a: (props) => (
    <a className="text-[var(--foreground)] underline decoration-white/30 underline-offset-4" {...props} />
  )
};

export function useMDXComponents(): MDXComponents {
  return components;
}

