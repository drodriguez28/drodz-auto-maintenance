import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMake, getModel, getSchedule } from "../data/vehicles";
import { getGuides, yearsLabel } from "../data/guides";
import { getOilEngines } from "../data/oils";
import { OilSection } from "../reuse/OilSection";
import { Badge } from "../reuse/Badge";

// Handles three URL depths:
//   /vehicles/:make               -> pick a model
//   /vehicles/:make/:model        -> pick a year
//   /vehicles/:make/:model/:year  -> maintenance schedule
function Vehicle() {
  const { make, model, year } = useParams();
  const navigate = useNavigate();
  const makeData = getMake(make);
  const modelData = getModel(make, model);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [make, model, year]);

  if (!makeData || (model && !modelData) || (year && !modelData?.years.includes(Number(year)))) {
    return (
      <div className="mx-auto mt-10 max-w-3xl px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Vehicle not found</h1>
        <Link to="/" className="text-accent-400 underline text-xl">Back to home</Link>
      </div>
    );
  }

  // Pick a model
  if (!model) {
    return (
      <div className="mx-auto mt-10 max-w-4xl px-4">
        <h1 className="mb-6 text-4xl font-bold text-white">{makeData.name} Models</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {Object.entries(makeData.models).map(([id, m]) => (
            <Link
              key={id}
              to={`/vehicles/${make}/${id}`}
              className="rounded-xl border border-garage-700 bg-garage-800 p-6 text-white transition hover:border-accent-500"
            >
              <div className="text-2xl font-bold">{m.name}</div>
              <div className="text-gray-400">{m.type}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Pick a year
  if (!year) {
    return (
      <div className="mx-auto mt-10 max-w-4xl px-4">
        <h1 className="mb-6 text-4xl font-bold text-white">
          {makeData.name} {modelData.name}: choose a year
        </h1>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-6">
          {modelData.years.map((y) => (
            <button
              key={y}
              onClick={() => navigate(`/vehicles/${make}/${model}/${y}`)}
              className="rounded-lg border border-garage-700 bg-garage-800 py-3 text-xl font-semibold text-white transition hover:border-accent-500 hover:text-accent-400"
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Maintenance schedule
  const schedule = getSchedule(make, model);
  const videos = getGuides(make, model, Number(year));
  const oilEngines = getOilEngines(make, model, Number(year));

  return (
    <div className="mx-auto mt-10 max-w-5xl px-4">
      <h1 className="text-4xl font-bold text-white md:text-5xl">
        {year} {makeData.name} {modelData.name}
      </h1>
      <p className="mt-2 mb-8 text-lg text-accent-500 font-semibold">{modelData.type} maintenance schedule</p>

      <div className="overflow-x-auto rounded-xl border border-garage-700 bg-garage-800 text-left shadow-lg">
        <table className="w-full text-white">
          <thead className="bg-garage-700 text-sm uppercase tracking-wide text-accent-400">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Interval</th>
              <th className="hidden px-4 py-3 md:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.service} className="border-t border-garage-700">
                <td className="px-4 py-3 font-semibold">{item.service}</td>
                <td className="px-4 py-3 text-gray-300">{item.interval}</td>
                <td className="hidden px-4 py-3 text-gray-400 md:table-cell">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <OilSection engines={oilEngines} modelName={modelData.name} />

      {videos.length > 0 && (
        <section className="mt-12 text-left">
          <h2 className="mb-6 text-3xl font-bold text-white">How-to Videos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="overflow-hidden rounded-xl border border-garage-700 bg-garage-800 shadow-lg">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.videoId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <Badge>{v.category}</Badge>
                  <h3 className="mt-2 text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-sm text-gray-400">
                    Fits {yearsLabel(v.years)} · {v.channel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="mt-6 text-sm text-gray-500">
        General guidance only. Always check your owner's manual for your exact {year} {modelData.name}.
      </p>

      <Link
        to="/"
        className="mt-6 mb-10 inline-block rounded-lg bg-accent-500 px-6 py-3 font-bold text-white transition hover:bg-accent-600"
      >
        Choose another vehicle
      </Link>
    </div>
  );
}

export default Vehicle;
