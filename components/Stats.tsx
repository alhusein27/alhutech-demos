"use client";

import type { DemoContent } from "@/content/types";
import { useCountUp } from "@/lib/hooks";

function StatItem({ stat }: { stat: DemoContent["stats"][number] }) {
  const { ref, display } = useCountUp(stat.value, stat.decimals ?? 0);
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 text-center">
      <p className="text-4xl font-bold tracking-tight text-slate-900">
        <span ref={ref}>
          {stat.prefix}
          {display}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
    </div>
  );
}

export default function Stats({ content }: { content: DemoContent }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
      {content.stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
