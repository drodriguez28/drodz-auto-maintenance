import { Badge } from "./Badge";

const rating = {
  best: { label: "Best pick", tone: "green" },
  good: { label: "Good", tone: "yellow" },
  okay: { label: "Okay", tone: "gray" },
  bad: { label: "Bad", tone: "red" },
};

const positions = [
  { id: "front", label: "Front" },
  { id: "rear", label: "Rear" },
];

export const BrakeSection = ({ items, vehicleName }) => (
  <div className="text-left">
    {positions.map((pos) => {
      const list = items.filter((b) => b.position === pos.id);
      return (
        <div key={pos.id} className="mb-6 last:mb-0">
          <h3 className="mb-3 text-xl font-bold text-white">{pos.label}</h3>
          {list.length === 0 ? (
            <p className="text-gray-400">No {pos.label.toLowerCase()} brake picks added yet for the {vehicleName}.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {list.map((b) => (
                <div key={b.id} className="rounded-xl border border-garage-700 bg-garage-900 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="gray">{b.part}</Badge>
                    {b.rating && <Badge tone={rating[b.rating].tone}>{rating[b.rating].label}</Badge>}
                    {!b.verified && <Badge tone="yellow">Verify fit</Badge>}
                  </div>
                  <div className="mt-2 text-lg font-bold text-white">{b.name}</div>
                  <div className="text-sm text-gray-400">{b.brand}</div>
                  {b.note && <p className="mt-1 text-sm text-gray-400">{b.note}</p>}
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block rounded-lg bg-accent-500 px-4 py-2 font-bold text-white transition hover:bg-accent-600"
                  >
                    Buy at {b.store}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    })}
  </div>
);
