import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makes } from "../data/vehicles";

const selectClass =
  "w-full rounded-lg border border-garage-600 bg-garage-900 text-white px-4 py-3 text-lg focus:border-accent-500 focus:ring-accent-500 disabled:opacity-40";

export const VehicleSelector = () => {
  const navigate = useNavigate();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const models = make ? makes[make].models : {};
  const years = make && model ? models[model].years : [];

  const onMake = (value) => {
    setMake(value);
    setModel("");
    setYear("");
  };

  const onModel = (value) => {
    setModel(value);
    setYear("");
  };

  const ready = make && model && year;

  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-garage-700 bg-garage-800 p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold uppercase tracking-wide text-accent-400">Make</span>
          <select className={selectClass} value={make} onChange={(e) => onMake(e.target.value)}>
            <option value="">Select make</option>
            {Object.entries(makes).map(([id, m]) => (
              <option key={id} value={id}>{m.name}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold uppercase tracking-wide text-accent-400">Model</span>
          <select className={selectClass} value={model} onChange={(e) => onModel(e.target.value)} disabled={!make}>
            <option value="">Select model</option>
            {Object.entries(models).map(([id, m]) => (
              <option key={id} value={id}>{m.name}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold uppercase tracking-wide text-accent-400">Year</span>
          <select className={selectClass} value={year} onChange={(e) => setYear(e.target.value)} disabled={!model}>
            <option value="">Select year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        disabled={!ready}
        onClick={() => navigate(`/vehicles/${make}/${model}/${year}`)}
        className="mt-6 w-full rounded-lg bg-accent-500 px-6 py-3 text-lg font-bold text-white transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        See maintenance schedule
      </button>
    </div>
  );
};
