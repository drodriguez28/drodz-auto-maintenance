// Engine oil guidance + brand picks. The data lives in ./json/oils.json.
// Entries marked `check: true` are ones we're less sure about — the page tells people
// to confirm on the oil cap / owner's manual. Brand picks are opinion, not lab tests.
import oilsJson from "./json/oils.json";

export const oilBrands = oilsJson.brands;

export const getOilEngines = (make, model, year) =>
  (oilsJson.engines[make]?.[model] ?? []).filter((o) => year >= o.years[0] && year <= o.years[1]);
