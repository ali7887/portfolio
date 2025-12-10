'use client';

import { memo, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Calendar, FolderKanban, Code2, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const stats: StatItem[] = [
  {
    label: 'Years Experience',
    value: 10,
    suffix: '+',
    icon: Calendar,
    color: 'text-accent-primary',
  },
  {
    label: 'Projects Completed',
    value: 50,
    suffix: '+',
    icon: FolderKanban,
    color: 'text-accent-secondary',
  },
  {
    label: 'Technologies Mastered',
    value: 15,
    suffix: '+',
    icon: Code2,
    color: 'text-accent-neon',
  },
  {
    label: 'Client Satisfaction',
    value: 100,
    suffix: '%',
    icon: Heart,
    color: 'text-accent-primary',
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
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="text-4xl md:text-5xl font-bold">
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 will-change-transform"
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={cn('bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-gray-200 shadow-sm', stat.color)}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Counter */}
                  <div className={stat.color}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

