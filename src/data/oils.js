// Engine oil guidance for every model in vehicles.js, split into engine/year eras.
// Brand picks (below) are our opinion, not lab tests.
// Entries marked `check: true` are ones we're less sure about — the page tells people
// to confirm on the oil cap / owner's manual.

const SPEC = {
  "0W-16": "API SP / ILSAC GF-6B full synthetic",
  "0W-20": "API SP / ILSAC GF-6A full synthetic",
  "5W-20": "API SP / ILSAC GF-6A",
  "5W-30": "API SP / ILSAC GF-6A",
};

// e(years, engine, viscosity, extras) -> engine/year entry
const e = (years, engine, viscosity, extras = {}) => ({
  years,
  engine,
  viscosity,
  spec: SPEC[viscosity],
  ...extras,
});

const DEXOS1 = { spec: "API SP + dexos1 approved (look for the dexos1 logo)" };
const DEXOS1_G3 = { spec: "API SP + dexos1 Gen 3 approved (look for the dexos1 logo)" };
const DIESEL = { spec: "Diesel engine oil, API CK-4 (check dexos2 on the label)", diesel: true };

const oilData = {
  toyota: {
    camry: [
      e([2000, 2006], "4-cyl & V6", "5W-30"),
      e([2007, 2017], "4-cyl & V6", "0W-20", { alt: "5W-20 also OK on 2007–2011", check: true }),
      e([2018, 2026], "2.5L 4-cyl / hybrid", "0W-16"),
      e([2018, 2024], "3.5L V6", "0W-20"),
    ],
    corolla: [
      e([2000, 2008], "1.8L", "5W-30", { check: true }),
      e([2009, 2019], "1.8L / 2.4L", "0W-20", { alt: "5W-20 also OK on 2009–2013", check: true }),
      e([2020, 2026], "2.0L", "0W-16", { check: true }),
    ],
    prius: [
      e([2001, 2009], "1.5L hybrid", "5W-30", { check: true }),
      e([2010, 2015], "1.8L hybrid", "0W-20"),
      e([2016, 2026], "Hybrid", "0W-16", { check: true }),
    ],
    rav4: [
      e([2000, 2005], "All engines", "5W-30"),
      e([2006, 2008], "2.4L / 3.5L V6", "5W-30", { check: true }),
      e([2009, 2018], "2.5L / 3.5L V6", "0W-20"),
      e([2019, 2026], "2.5L", "0W-20", { check: true }),
    ],
    highlander: [
      e([2001, 2007], "All engines", "5W-30"),
      e([2008, 2026], "All gas engines", "0W-20", { check: true }),
    ],
    "4runner": [
      e([2000, 2009], "V6 / V8", "5W-30"),
      e([2010, 2026], "4.0L V6", "0W-20", { alt: "5W-30 also listed on some years", check: true }),
    ],
    tacoma: [
      e([2000, 2015], "All engines", "5W-30"),
      e([2016, 2026], "2.7L / 3.5L V6", "0W-20", { check: true }),
    ],
    tundra: [
      e([2000, 2006], "4.7L V8", "5W-30"),
      e([2007, 2021], "4.6L / 5.7L V8", "0W-20", { alt: "5W-20 also OK on early years", check: true }),
      e([2022, 2026], "3.4L twin-turbo V6", "0W-20", { check: true }),
    ],
    sienna: [
      e([2000, 2006], "3.0L / 3.3L V6", "5W-30"),
      e([2007, 2010], "3.5L V6", "0W-20", { alt: "5W-20 also OK", check: true }),
      e([2011, 2020], "3.5L V6", "0W-20"),
      e([2021, 2026], "2.5L hybrid", "0W-16", { check: true }),
    ],
  },
  gmc: {
    "sierra-1500": [
      e([2000, 2018], "V6 / V8 gas", "5W-30", DEXOS1),
      e([2019, 2026], "5.3L / 6.2L V8", "0W-20", { ...DEXOS1_G3, check: true }),
    ],
    "sierra-2500hd": [
      e([2001, 2026], "6.0L gas V8", "5W-30", { ...DEXOS1, check: true }),
      e([2001, 2026], "6.6L Duramax diesel", "5W-40", { ...DIESEL, check: true }),
    ],
    canyon: [
      e([2004, 2012], "All engines", "5W-30", DEXOS1),
      e([2015, 2022], "2.5L / 3.6L V6", "5W-30", DEXOS1),
      e([2023, 2026], "2.7L turbo", "0W-20", { ...DEXOS1_G3, check: true }),
    ],
    yukon: [
      e([2000, 2020], "V8", "5W-30", DEXOS1),
      e([2021, 2026], "5.3L / 6.2L V8", "0W-20", { ...DEXOS1_G3, check: true }),
    ],
    "yukon-xl": [
      e([2000, 2020], "V8", "5W-30", DEXOS1),
      e([2021, 2026], "5.3L / 6.2L V8", "0W-20", { ...DEXOS1_G3, check: true }),
    ],
    acadia: [
      e([2007, 2016], "3.6L V6", "5W-30", DEXOS1),
      e([2017, 2026], "2.5L / 3.6L V6", "0W-20", { ...DEXOS1, check: true }),
    ],
    terrain: [
      e([2010, 2017], "2.4L / V6", "5W-30", DEXOS1),
      e([2018, 2026], "Turbo 4-cyl", "0W-20", { ...DEXOS1, check: true }),
    ],
    envoy: [e([2002, 2009], "4.2L inline-6 / V8", "5W-30", DEXOS1)],
    safari: [e([2000, 2005], "4.3L V6", "5W-30", { check: true })],
    savana: [e([2000, 2026], "Gas engines", "5W-30", { ...DEXOS1, check: true })],
  },
};

// Brand picks by mileage. Ratings: best / good / okay.
export const oilBrands = {
  under100k: [
    { brand: "Mobil 1 Full Synthetic", rating: "best", note: "Widely sold at Walmart, auto parts stores and Costco." },
    { brand: "Pennzoil Platinum Full Synthetic", rating: "good", note: "Easy to find at any store." },
    { brand: "Valvoline Advanced Full Synthetic", rating: "good", note: "Often a bit cheaper per quart." },
    { brand: "Castrol EDGE", rating: "good", note: "Full synthetic, easy to find." },
    { brand: "Super Tech Full Synthetic (Walmart)", rating: "okay", note: "Budget pick. Meets the spec for less money." },
  ],
  over100k: [
    { brand: "Valvoline MaxLife Full Synthetic", rating: "best", note: "High-mileage formula with seal conditioners." },
    { brand: "Mobil 1 High Mileage", rating: "good", note: "Full synthetic, easy to find." },
    { brand: "Pennzoil High Mileage", rating: "good", note: "Easy to find at any store." },
    { brand: "Castrol GTX High Mileage", rating: "good", note: "Synthetic-blend, budget friendly." },
    { brand: "Super Tech High Mileage (Walmart)", rating: "okay", note: "Budget pick." },
  ],
  diesel: [
    { brand: "Shell Rotella T6 5W-40", rating: "best", note: "Full synthetic diesel oil, sold at most stores." },
    { brand: "Mobil Delvac 1 5W-40", rating: "good", note: "Full synthetic diesel oil." },
  ],
};

export const getOilEngines = (make, model, year) =>
  (oilData[make]?.[model] ?? []).filter((o) => year >= o.years[0] && year <= o.years[1]);
