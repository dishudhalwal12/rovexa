"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";

const navItems = [
  { href: "/", label: "Current Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" }
];

const floatingTags = [
  { label: "Marketing", className: "left-[4%] top-[22%] md:left-[9%] md:top-[18%]" },
  { label: "Creative Branding", className: "right-[4%] top-[20%] md:right-[10%] md:top-[18%]" },
  { label: "Tech", className: "left-[8%] bottom-[24%] md:left-[13%] md:bottom-[18%]" },
  {
    label: "Operations & Distribution",
    className: "right-[4%] bottom-[22%] md:right-[8%] md:bottom-[16%]"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function LoopLine({
  className,
  path
}: {
  className: string;
  path: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 200"
      className={`absolute text-white/18 ${className}`}
      fill="none"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FlowerBadge({ className }: { className: string }) {
  return (
    <div
      className={`absolute grid h-20 w-20 place-items-center rounded-full border border-white/12 bg-white/6 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl ${className}`}
    >
      <div className="relative h-11 w-11 overflow-hidden rounded-full">
        <Image src="/images/logo.png" alt="" fill sizes="44px" className="object-cover" />
      </div>
    </div>
  );
}

export function HomeHeroV2() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(247,214,174,0.15),transparent_24%),radial-gradient(circle_at_12%_70%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_88%_76%,rgba(245,195,139,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(circle_at_center,black_18%,transparent_72%)]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-4 md:px-8 md:py-6 lg:px-10">
        <header className="z-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="mx-auto flex items-center gap-3 md:mx-0">
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
            <span className="font-brand text-[1.9rem] leading-none">Rovexa</span>
          </Link>

          <nav className="mx-auto flex w-full max-w-max flex-wrap items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
            {navItems.map((item) => (
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
            className="mx-auto inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 text-sm font-medium text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-200 hover:-translate-y-0.5 md:mx-0"
          >
            Get an audit
          </Link>
        </header>

        <section className="relative flex flex-1 items-center justify-center overflow-hidden py-10 md:py-14">
          <LoopLine
            className="-left-10 top-24 hidden h-56 w-72 md:block"
            path="M20 130 C80 40, 150 36, 180 96 S280 170, 302 88"
          />
          <LoopLine
            className="-right-6 top-28 hidden h-56 w-80 md:block"
            path="M18 92 C80 24, 124 20, 184 88 S280 168, 304 90"
          />
          <LoopLine
            className="bottom-24 left-0 hidden h-48 w-64 md:block"
            path="M18 42 C70 112, 120 148, 186 102 S246 26, 302 86"
          />
          <LoopLine
            className="bottom-16 right-0 hidden h-48 w-64 md:block"
            path="M24 98 C76 44, 136 24, 190 84 S260 164, 304 116"
          />

          <div className="pointer-events-none absolute left-3 bottom-10 h-28 w-28 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] p-2 opacity-80 md:left-8 md:bottom-12 md:h-36 md:w-36">
            <div className="h-full w-full rounded-[1rem] [background-image:linear-gradient(45deg,rgba(243,231,191,0.9)_12.5%,transparent_12.5%,transparent_50%,rgba(243,231,191,0.9)_50%,rgba(243,231,191,0.9)_62.5%,transparent_62.5%,transparent_100%)] [background-size:18px_18px] opacity-80" />
          </div>

          <div className="pointer-events-none absolute right-4 bottom-12 h-24 w-24 rounded-full border border-white/12 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.14),transparent_55%)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:right-10 md:h-28 md:w-28">
            <div className="absolute inset-[20%] rounded-full border border-[var(--accent)]/50" />
            <div className="absolute left-[47%] top-[15%] h-[70%] w-px bg-white/18" />
            <div className="absolute top-[47%] left-[15%] h-px w-[70%] bg-white/18" />
          </div>

          <FlowerBadge className="left-[8%] top-[14%] hidden md:grid" />
          <FlowerBadge className="right-[12%] bottom-[26%] hidden md:grid" />

          {floatingTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + index * 0.08 }}
              className={`absolute z-10 hidden rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)] shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl md:block ${tag.className}`}
            >
              {tag.label}
            </motion.div>
          ))}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 mx-auto flex w-full max-w-[1160px] flex-col items-center text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              <span>Alt Concept</span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              <span>Poster Composition</span>
            </motion.div>

            <motion.p variants={itemVariants} className="font-brand text-[2.4rem] leading-none text-white/90 md:text-[3.8rem]">
              Rovexa
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-heading mt-5 max-w-[11ch] text-balance text-[4.1rem] leading-[0.83] tracking-[-0.085em] md:text-[6rem] lg:text-[8.6rem]"
            >
              Grow
              <br />
              <span className="text-white/88">beautifully.</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="pointer-events-none absolute left-1/2 top-[34%] hidden -translate-x-[18%] -rotate-[8deg] rounded-[1.8rem] border border-white/14 bg-[linear-gradient(135deg,rgba(243,231,191,0.95),rgba(245,195,139,0.82))] px-10 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] md:block"
            >
              <div className="grid h-16 w-36 place-items-center rounded-[1.1rem] border border-black/8 bg-black/6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-black/70">
                Brand Fuel
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative mt-5 flex max-w-[940px] flex-col items-center gap-3 md:flex-row md:justify-center"
            >
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <span className="text-lg leading-none">✦</span>
                <span>marketing</span>
              </div>
              <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                creative branding
              </div>
              <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                tech
              </div>
              <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                operations & distribution
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-[52ch] text-balance text-base leading-8 text-[var(--muted)] md:text-lg"
            >
              A poster-style homepage exploration for Rovexa, built around a centered message,
              graphic energy, and brand-led decorative elements that still feel premium and calm.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative mt-12 w-full max-w-[920px] rounded-[2rem] border border-white/12 bg-white/6 px-4 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl md:px-6"
            >
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Bottom CTA Composition
                  </p>
                  <p className="mt-2 max-w-[34ch] text-sm leading-7 text-[var(--muted)] md:text-base">
                    This sits inside the poster layout instead of floating separately, so the hero feels
                    like one designed piece.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 md:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-13 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition duration-200 hover:-translate-y-0.5"
                  >
                    Get an audit
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/12 bg-black/24 px-6 text-sm text-[var(--foreground)] transition duration-200 hover:border-white/24"
                  >
                    Compare with current homepage
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 md:hidden"
            >
              {floatingTags.map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)] backdrop-blur-2xl"
                >
                  {tag.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
