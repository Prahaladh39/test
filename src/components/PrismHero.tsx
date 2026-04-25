import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Prism = lazy(() => import("@/components/Prism"));

export function PrismSkeleton() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2">
        <Skeleton className="h-full w-full rounded-full opacity-40 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,hsl(var(--primary)/0.08)_50%,transparent_60%)]" />
    </div>
  );
}

type PrismHeroProps = {
  scale?: number;
  height?: number;
  baseWidth?: number;
  timeScale?: number;
  glow?: number;
};

export function PrismHero({
  scale = 3.6,
  height = 3.5,
  baseWidth = 5.5,
  timeScale = 0.5,
  glow = 1,
}: PrismHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <PrismSkeleton />
      {mounted && (
        <Suspense fallback={null}>
          <Prism
            animationType="rotate"
            timeScale={timeScale}
            height={height}
            baseWidth={baseWidth}
            scale={scale}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={glow}
          />
        </Suspense>
      )}
    </>
  );
}
