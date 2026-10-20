import { useState } from "react";
import { Badge } from "./Badge";
import { oilBrands } from "../data/oils";

const rating = {
  best: { label: "Best pick", tone: "green" },
  good: { label: "Good", tone: "yellow" },
  okay: { label: "Okay", tone: "gray" },
  bad: { label: "Bad", tone: "red" },
};

const tabs = [
  { id: "under100k", label: "Under 100,000 mi" },
  { id: "over100k", label: "Over 100,000 mi" },
];

export const OilSection = ({ engines, modelName }) => {
  const [mileage, setMileage] = useState("under100k");
  if (engines.length === 0) return null;

  const hasGas = engines.some((e) => !e.diesel);
  const hasDiesel = engines.some((e) => e.diesel);
  const uses016 = engines.some((e) => e.viscosity === "0W-16");

  return (
    <div className="text-left">
      <p className="mb-6 text-gray-400">Match the viscosity for your {modelName}'s engine.</p>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {engines.map((e) => (
          <div key={e.engine} className="rounded-xl border border-garage-700 bg-garage-800 p-5 shadow-lg">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-400">{e.engine}</div>
              {e.check && <Badge tone="yellow">Verify</Badge>}
            </div>
            <div className="mt-1 text-4xl font-bold text-accent-500">{e.viscosity}</div>
            <div className="mt-1 text-gray-300">{e.spec}</div>
            {e.alt && <div className="mt-1 text-sm text-gray-400">{e.alt}</div>}
            {e.check && (
              <div className="mt-2 text-sm text-yellow-300/80">
                Less sure about this one. Confirm on your oil cap or owner's manual.
              </div>
            )}
          </div>
        ))}
      </div>

      {hasGas && (
        <>
          <h3 className="mb-3 text-xl font-bold text-white">Brands (gas engines)</h3>
          <div className="mb-4 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setMileage(t.id)}
                className={`rounded-lg px-4 py-2 font-semibold transition ${
                  mileage === t.id
                    ? "bg-accent-500 text-white"
                    : "bg-garage-800 text-gray-300 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mb-4 text-sm text-gray-400">
            {mileage === "under100k"
              ? "Full synthetic: change about every 5,000–10,000 mi (or when the oil-life monitor says)."
              : "High-mileage oil helps with leaks and burn-off. Change about every 5,000–7,500 mi."}
          </p>
          <BrandGrid brands={oilBrands[mileage]} />
          {mileage === "over100k" && uses016 && (
            <p className="mt-3 text-sm text-gray-400">
              High-mileage oil isn't made in every grade. If you can't find 0W-16 high mileage, use a regular
              full synthetic 0W-16.
            </p>
          )}
        </>
      )}

      {hasDiesel && (
        <>
          <h3 className="mb-4 mt-8 text-xl font-bold text-white">Brands (diesel engines)</h3>
          <BrandGrid brands={oilBrands.diesel} />
        </>
      )}

      <p className="mt-4 text-sm text-gray-500">
        Ratings are our opinion, not lab tests. Any oil with the right viscosity and spec on the bottle
        works. Check the label and your owner's manual.
      </p>
    </div>
  );
};

const BrandGrid = ({ brands }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {brands.map((b) => (
      <div key={b.brand} className="rounded-xl border border-garage-700 bg-garage-800 p-4">
        <Badge tone={rating[b.rating].tone}>{rating[b.rating].label}</Badge>
        <div className="mt-2 text-lg font-bold text-white">{b.brand}</div>
        <p className="text-sm text-gray-400">{b.note}</p>
      </div>
    ))}
  </div>
);
