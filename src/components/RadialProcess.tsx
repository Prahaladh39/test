import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RadialStep {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  outcome: string;
}

interface RadialProcessProps {
  steps: RadialStep[];
}

/**
 * Wove-inspired rotating half-wheel — works on every breakpoint.
 *
 * Numbers sit on an arc on the LEFT of the layout. The active number rotates
 * to the 3-o'clock front position. The wheel size, font sizes, and layout
 * direction adapt for mobile vs. tablet/desktop.
 */
export function RadialProcess({ steps }: RadialProcessProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = steps[activeIdx];

  // 60deg arc spread across the visible right half of the wheel.
  const ARC_DEG = 60;
  const stepAngle = steps.length > 1 ? ARC_DEG / (steps.length - 1) : 0;
  const wheelRotation = -(activeIdx * stepAngle - ARC_DEG / 2);

  const goTo = (i: number) => {
    if (i < 0 || i >= steps.length) return;
    setActiveIdx(i);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 8) return;
    if (e.deltaY > 0) goTo(Math.min(activeIdx + 1, steps.length - 1));
    else goTo(Math.max(activeIdx - 1, 0));
  };

  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-8 lg:gap-12 items-center"
      onWheel={handleWheel}
    >
      {/* LEFT: half-wheel of numbers — sized per breakpoint */}
      <div className="relative h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden">
        {/*
          The wheel pivots from a point off the left edge so only the right
          half is visible. We use responsive sizing via inline CSS variables
          so the radius scales with the wheel size on mobile.
        */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-x-[60%] -translate-y-1/2
                     w-[520px] h-[520px]
                     sm:w-[700px] sm:h-[700px]
                     md:w-[900px] md:h-[900px]"
          animate={{ rotate: wheelRotation }}
          transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.8 }}
        >
          {/* Faint orbit ring */}
          <div className="absolute inset-0 rounded-full border border-border/50" />
          {/* Anchor dot at the active 3-o'clock position */}
          <div
            className="absolute w-2 h-2 rounded-full bg-foreground"
            style={{
              left: "100%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {steps.map((step, i) => {
            const angle = i * stepAngle - ARC_DEG / 2;
            const isActive = i === activeIdx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Step ${step.number}: ${step.title}`}
                className="absolute top-1/2 left-1/2 focus:outline-none
                           [--r:260px] sm:[--r:350px] md:[--r:450px]"
                style={{
                  // translateX(var(--r)) places the number on the rim; the
                  // radius matches half of the wheel size at each breakpoint.
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--r))`,
                }}
              >
                <motion.span
                  animate={{ rotate: -(angle + wheelRotation) }}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                  className={`block font-bold tabular-nums tracking-tight select-none transition-[color,font-size,opacity] duration-300 ${
                    isActive
                      ? "text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-100"
                      : "text-muted-foreground/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-60 hover:opacity-100 hover:text-foreground"
                  }`}
                >
                  {step.number}
                </motion.span>
              </button>
            );
          })}
        </motion.div>

        {/* Up / Down controls — visible on every breakpoint so mobile users
            have an obvious way to turn the wheel without a scroll wheel. */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <button
            type="button"
            onClick={() => goTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="w-9 h-9 rounded-full border border-border/60 bg-background/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous step"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx === steps.length - 1}
            className="w-9 h-9 rounded-full border border-border/60 bg-background/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next step"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT (or BELOW on mobile): details for the active step */}
      <div className="relative px-1 md:pl-2 lg:pl-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.number}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-md border-l border-border/60 pl-5 sm:pl-6 lg:pl-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
              {active.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {active.text}
            </p>
            <p className="mt-4 sm:mt-5 text-sm text-primary font-medium">
              → {active.outcome}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 sm:mt-8 pl-5 sm:pl-6 lg:pl-8 text-xs font-mono text-muted-foreground tracking-wider">
          {String(activeIdx + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
