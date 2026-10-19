const tones = {
  accent: "bg-accent-500/20 text-accent-400",
  green: "bg-emerald-500/20 text-emerald-400",
  yellow: "bg-yellow-400/20 text-yellow-300",
  red: "bg-red-500/20 text-red-400",
  gray: "bg-garage-600 text-gray-300",
};

export const Badge = ({ children, tone = "accent" }) => (
  <span className={`rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}>
    {children}
  </span>
);
