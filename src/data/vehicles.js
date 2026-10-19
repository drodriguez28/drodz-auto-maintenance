// Vehicle catalog + general maintenance schedule data.
// To add a make: add a key to `makes` with its models.
// Intervals are general guidance only — owner's manual always wins.

const LAST_YEAR = 2026;

const range = (from, to = LAST_YEAR, skip = []) =>
  Array.from({ length: to - from + 1 }, (_, i) => to - i).filter((y) => !skip.includes(y)); // newest first

export const makes = {
  toyota: {
    name: "Toyota",
    models: {
      camry: { name: "Camry", type: "Sedan", years: range(2000) },
      corolla: { name: "Corolla", type: "Sedan", years: range(2000) },
      prius: { name: "Prius", type: "Hybrid", years: range(2001), hybrid: true },
      rav4: { name: "RAV4", type: "SUV", years: range(2000) },
      highlander: { name: "Highlander", type: "SUV", years: range(2001) },
      "4runner": { name: "4Runner", type: "SUV", years: range(2000), fourWheel: true },
      tacoma: { name: "Tacoma", type: "Truck", years: range(2000), fourWheel: true },
      tundra: { name: "Tundra", type: "Truck", years: range(2000), fourWheel: true },
      sienna: { name: "Sienna", type: "Minivan", years: range(2000) },
    },
  },
  gmc: {
    name: "GMC",
    models: {
      "sierra-1500": { name: "Sierra 1500", type: "Truck", years: range(2000), fourWheel: true },
      "sierra-2500hd": { name: "Sierra 2500HD", type: "Truck", years: range(2001), fourWheel: true },
      canyon: { name: "Canyon", type: "Truck", years: range(2004, LAST_YEAR, [2013, 2014]), fourWheel: true },
      yukon: { name: "Yukon", type: "SUV", years: range(2000), fourWheel: true },
      "yukon-xl": { name: "Yukon XL", type: "SUV", years: range(2000), fourWheel: true },
      acadia: { name: "Acadia", type: "SUV", years: range(2007) },
      terrain: { name: "Terrain", type: "SUV", years: range(2010) },
      envoy: { name: "Envoy", type: "SUV", years: range(2002, 2009), fourWheel: true },
      savana: { name: "Savana", type: "Van", years: range(2000) },
      safari: { name: "Safari", type: "Van", years: range(2000, 2005) },
    },
  },
};

const baseSchedule = [
  { service: "Engine oil & filter", interval: "Every 5,000–10,000 mi / 6–12 mo", note: "Shorter interval for conventional oil or severe driving." },
  { service: "Tire rotation", interval: "Every 5,000–7,500 mi", note: "Check tire pressure and tread at the same time." },
  { service: "Brake inspection", interval: "Every 10,000 mi / 12 mo", note: "Pads, rotors, and lines." },
  { service: "Engine air filter", interval: "Every 15,000–30,000 mi", note: "Replace sooner in dusty conditions." },
  { service: "Cabin air filter", interval: "Every 15,000–20,000 mi", note: "Replace if airflow drops or the A/C smells musty." },
  { service: "Battery check", interval: "Yearly after year 3", note: "Clean terminals and test charge." },
  { service: "Brake fluid", interval: "Every 2–3 years", note: "Brake fluid absorbs moisture over time." },
  { service: "Drive belt inspection", interval: "Around 60,000 mi", note: "Look for cracks and glazing." },
  { service: "Transmission fluid", interval: "Every 60,000–100,000 mi", note: "Varies by transmission type — check the manual." },
  { service: "Spark plugs", interval: "Every 60,000–120,000 mi", note: "Iridium plugs last longest." },
  { service: "Coolant", interval: "First ~100,000 mi, then every ~50,000", note: "Use the correct coolant type for the vehicle." },
];

const hybridExtras = [
  { service: "Hybrid system check", interval: "Every 12 mo", note: "Have a shop scan the hybrid battery and inverter." },
  { service: "Inverter coolant", interval: "Check at ~100,000 mi", note: "Separate loop from the engine coolant." },
];

const fourWheelExtras = [
  { service: "Differential & transfer case fluid", interval: "Every 30,000–60,000 mi", note: "More often if towing or off-roading." },
];

export const getMake = (makeId) => makes[makeId];

export const getModel = (makeId, modelId) => makes[makeId]?.models[modelId];

export const getSchedule = (makeId, modelId) => {
  const model = getModel(makeId, modelId);
  if (!model) return [];
  return [
    ...baseSchedule,
    ...(model.hybrid ? hybridExtras : []),
    ...(model.fourWheel ? fourWheelExtras : []),
  ];
};
