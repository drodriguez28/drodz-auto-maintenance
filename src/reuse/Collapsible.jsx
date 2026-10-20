import { useState } from "react";

// A card that starts closed and opens on click. Children only render while open,
// so heavy content (like video embeds) isn't loaded until needed.
export const Collapsible = ({ title, subtitle, badge, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-garage-700 bg-garage-800 shadow-lg">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">{title}</span>
            {badge}
          </div>
          {subtitle && <p className="mt-1 text-gray-400">{subtitle}</p>}
        </div>
        <svg
          className={`h-6 w-6 shrink-0 text-accent-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="border-t border-garage-700 p-5">{children}</div>}
    </div>
  );
};
