import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="relative z-20 flex flex-col gap-4 py-2 lg:flex-row lg:items-center lg:justify-between">
      <Link href="/" className="mx-auto flex items-center gap-3 lg:mx-0">
        <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/10">
          <Image
            src="/images/logo.png"
            alt="Rovexa flower logo"
            fill
            sizes="44px"
            className="object-cover"
            priority
          />
        </div>
        <span className="font-brand text-[1.9rem] leading-none tracking-[0.01em]">Rovexa</span>
      </Link>

      <nav
        aria-label="Primary"
        className="glass-pill mx-auto flex w-full max-w-max flex-wrap items-center justify-center gap-2 rounded-[2rem] p-2 lg:mx-0"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2.5 text-sm text-[var(--muted)] transition duration-200 hover:bg-white/8 hover:text-[var(--foreground)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="glass-pill mx-auto inline-flex min-h-13 items-center justify-center rounded-full px-6 text-sm font-medium text-[var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-white/30 lg:mx-0"
      >
        Get an audit
      </Link>
    </header>
  );
}

