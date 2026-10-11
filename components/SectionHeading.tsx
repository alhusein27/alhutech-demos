interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({ kicker, title, subtitle, align = "left", dark = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {kicker && (
        <p className="kicker-accent text-sm font-bold uppercase tracking-[0.18em] mb-3">{kicker}</p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${dark ? "text-white/80" : "text-slate-600"}`}>{subtitle}</p>
      )}
    </div>
  );
}
