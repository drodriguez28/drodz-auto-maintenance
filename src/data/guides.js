// How-to video guides (iFixit-style). Each guide fits a make/model for a year range,
// so one video can cover several model years (e.g. a 2014–2019 Corolla).
// To add one: push an entry with the YouTube video id and the years it applies to.

export const guides = [
  {
    id: "camry-maint-light-reset",
    make: "toyota",
    model: "camry",
    years: [2020, 2024],
    title: "Reset the maintenance light",
    category: "Reset",
    videoId: "P_FO3CMDu5s",
    channel: "Gearmo Auto",
  },
  {
    id: "camry-front-pads-rotors",
    make: "toyota",
    model: "camry",
    years: [2018, 2024],
    title: "Replace the front brake pads & rotors",
    category: "Brakes",
    videoId: "ocQuRgMCzM4",
    channel: "603 Mechanic vids",
  },
  {
    id: "camry-oil-change-reset",
    make: "toyota",
    model: "camry",
    years: [2018, 2023],
    title: "Oil change & maintenance light reset",
    category: "Oil & Filters",
    videoId: "udIAjEA_fq4",
    channel: "603 Mechanic vids",
  },
  {
    id: "corolla-license-plate-lights",
    make: "toyota",
    model: "corolla",
    years: [2014, 2017],
    title: "Replace the rear license plate lights",
    category: "Lighting",
    videoId: "4Fuf0yzM054",
    channel: "Zafar Karimov",
  },
  {
    id: "corolla-serpentine-belt",
    make: "toyota",
    model: "corolla",
    years: [2014, 2019],
    title: "Replace the serpentine belt (1.8L 2ZR-FE)",
    category: "Belts",
    videoId: "LIMqf2WJN48",
    channel: "Clever Fix",
  },
  {
    id: "corolla-oil-change-air-filters",
    make: "toyota",
    model: "corolla",
    years: [2017, 2017],
    title: "Oil change & air filter replacement",
    category: "Oil & Filters",
    videoId: "oxwIQA-yPLk",
    channel: "Daily Maintenance",
  },
  {
    id: "corolla-maint-light-reset",
    make: "toyota",
    model: "corolla",
    years: [2017, 2018],
    title: "Reset the maintenance light",
    category: "Reset",
    videoId: "fbTtVqxM8IA",
    channel: "Lehew",
  },
  {
    id: "corolla-key-fob-battery",
    make: "toyota",
    model: "corolla",
    years: [2014, 2019],
    title: "Replace the key fob battery",
    category: "Electrical",
    videoId: "h_RvKLb9CWY",
    channel: "PYR Automotive",
  },
  {
    id: "corolla-front-brake-pads",
    make: "toyota",
    model: "corolla",
    years: [2017, 2017],
    title: "Replace the front brake pads",
    category: "Brakes",
    videoId: "ZMrEsA5JevM",
    channel: "UNLEASHED",
  },
];

export const getGuides = (make, model, year) =>
  guides.filter(
    (g) => g.make === make && g.model === model && year >= g.years[0] && year <= g.years[1]
  );

export const yearsLabel = ([from, to]) => (from === to ? `${from}` : `${from}–${to}`);
