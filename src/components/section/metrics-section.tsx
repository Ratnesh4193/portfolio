"use client";

import { Activity, Cpu, Database, Flame, Trophy, Zap } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import BlurFade from "@/components/magicui/blur-fade";

const METRICS = [
  {
    icon: Flame,
    prefix: "",
    value: 80,
    suffix: "M RPS",
    label: "Peak Microservice Throughput",
    subtext: "Config service serving 50+ services with 2x headroom",
  },
  {
    icon: Zap,
    prefix: "",
    value: 1,
    suffix: "M+ req/min",
    label: "Real-Time Dispatch Engine",
    subtext: "Kafka stress-dispatch adding +90K orders/day",
  },
  {
    icon: Database,
    prefix: "",
    value: 8,
    suffix: "B+ Records",
    label: "Zero-Downtime Data Pipeline",
    subtext: "DynamoDB lifecycle & 110M historical archival",
  },
  {
    icon: Cpu,
    prefix: "-",
    value: 42,
    suffix: "% Latency",
    label: "Hardware Acceleration",
    subtext: "SIMD JSON decoding cutting microservice read times",
  },
  {
    icon: Trophy,
    prefix: "AIR ",
    value: 56,
    suffix: "",
    label: "ICPC Asia West Regionalist",
    subtext: "Ranked among top competitive programmers in South Asia",
  },
  {
    icon: Activity,
    prefix: "",
    value: 1500,
    suffix: "+ Problems",
    label: "Competitive Programming",
    subtext: "LeetCode Knight (1937) & Codeforces Expert (1729)",
  },
];

export default function MetricsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="border bg-primary/10 border-primary/20 text-primary rounded-xl px-4 py-1 text-xs font-semibold uppercase tracking-wider">
          Engineering Scale & Impact
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent via-border to-transparent" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <BlurFade key={metric.label} delay={0.05 * idx}>
              <div className="group relative flex flex-col justify-between p-4 h-full rounded-2xl border border-border/60 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xs hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="size-4" />
                  </span>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-baseline gap-1">
                    {metric.prefix && <span>{metric.prefix}</span>}
                    <NumberTicker value={metric.value} delay={0.1 + idx * 0.05} />
                    <span>{metric.suffix}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground/90 mt-1">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                    {metric.subtext}
                  </p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
