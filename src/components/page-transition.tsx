'use client';

import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          key={pathname}
          initial={{ x: "8%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-8%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="h-full w-full"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

