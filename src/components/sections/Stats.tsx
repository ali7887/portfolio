"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Calendar, FolderKanban, Code2, Heart } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const stats: StatItem[] = [
  {
    label: "Years Experience",
    value: 10,
    suffix: "+",
    icon: Calendar,
    color: "text-accent-primary",
  },
  {
    label: "Projects Completed",
    value: 50,
    suffix: "+",
    icon: FolderKanban,
    color: "text-accent-secondary",
  },
  {
    label: "Technologies Mastered",
    value: 15,
    suffix: "+",
    icon: Code2,
    color: "text-accent-neon",
  },
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    icon: Heart,
    color: "text-accent-primary",
  },
];

/**
 * AnimatedCounter - Counter component with smooth count-up animation
 */
const AnimatedCounter = memo(function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
});

/**
 * Stats - Animated statistics section
 * Features count-up animations when scrolling into view
 */
export function Stats() {
  return (
    <section className="bg-gradient-to-b from-bg-primary to-bg-secondary px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 will-change-transform hover:shadow-lg"
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm",
                      stat.color
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  {/* Counter */}
                  <div className={stat.color}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
