"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type AppBootstrapProps = {
  children: React.ReactNode;
};

function waitForWordmark() {
  return new Promise<void>((resolve) => {
    const image: HTMLImageElement = new window.Image();
    const finish = () => resolve();

    image.onload = finish;
    image.onerror = finish;
    image.src = "/images/rovexa-wordmark.png";

    if (image.complete) {
      finish();
      return;
    }

    if (typeof image.decode === "function") {
      image
        .decode()
        .then(finish)
        .catch(() => undefined);
    }
  });
}

export function AppBootstrap({ children }: AppBootstrapProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const splashRoot = document.createElement("div");
    splashRoot.setAttribute("data-bootstrap-overlay", "true");
    document.body.appendChild(splashRoot);
    setPortalRoot(splashRoot);

    return () => {
      splashRoot.remove();
      setPortalRoot(null);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fontsReady =
      typeof document !== "undefined" && "fonts" in document
        ? document.fonts.ready
        : Promise.resolve();

    Promise.all([fontsReady, waitForWordmark()]).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (isMounted) {
            setIsReady(true);
          }
        });
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!portalRoot) {
      return;
    }

    document.documentElement.style.overflow = isReady ? "" : "hidden";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isReady, portalRoot]);

  return (
    <>
      {children}

      {portalRoot
        ? createPortal(
            <AnimatePresence>
              {!isReady && (
                <motion.div
                  key="splash"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-[999] overflow-hidden bg-[var(--background)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(243,231,191,0.05),transparent_30%)]" />
                  <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(circle_at_center,black_18%,transparent_72%)]" />

                  <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex justify-center"
                    >
                      <div className="pointer-events-none absolute inset-[-16%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_60%)] blur-3xl" />
                      <Image
                        src="/images/rovexa-wordmark.png"
                        alt="Rovexa"
                        width={3281}
                        height={1875}
                        priority
                        className="relative z-10 h-auto w-[min(88vw,720px)] object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8 flex items-center justify-center gap-3"
                      aria-label="Loading"
                    >
                      <span className="splash-dot" />
                      <span className="splash-dot" />
                      <span className="splash-dot" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            portalRoot
          )
        : null}
    </>
  );
}
