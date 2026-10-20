// What-to-buy picks for brakes (pads, rotors), front and rear. The data lives in ./json/brakes.json.
// Each entry fits a make/model for a year range, with a store link where people can buy it.
import brakes from "./json/brakes.json";

export const getBrakes = (make, model, year) =>
  brakes.filter(
    (b) => b.make === make && b.model === model && year >= b.years[0] && year <= b.years[1]
  );
