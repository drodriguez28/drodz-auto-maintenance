// How-to video guides (iFixit-style). The data lives in ./json/guides.json.
// Each guide fits a make/model for a year range, so one video can cover several model years.
import guides from "./json/guides.json";

export { guides };

export const getGuides = (make, model, year) =>
  guides.filter(
    (g) => g.make === make && g.model === model && year >= g.years[0] && year <= g.years[1]
  );

export const yearsLabel = ([from, to]) => (from === to ? `${from}` : `${from}–${to}`);
