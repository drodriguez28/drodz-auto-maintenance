# D-RODZ Car Maintenance

D-RODZ Car Maintenance is a web app for looking up what your car needs. Pick a make, model and year on the home page and it shows a general maintenance schedule for that vehicle.

Toyota and GMC are supported so far. More makes and models are planned.

It started as a copy of [d-rodz-home-services-ui](https://github.com/drodriguez28/d-rodz-home-services-ui) and reuses the same stack and components.

## Stack

- React 19 + Vite
- Tailwind CSS 3 + Flowbite / flowbite-react
- React Router

## Run it

```
pnpm install
pnpm run dev
```

The dev server runs on http://localhost:3000.

## Project layout

- `src/data/vehicles.js` holds the makes, models, year ranges and maintenance schedule data. Add a new make or model here.
- `src/components/` has the pages (`Home`, `Vehicle`), the nav bar and the logo.
- `src/reuse/` has the shared pieces (`HeroSection`, `InfoCard`, `VehicleSelector`, `FooterFlowbite`).

## Theme

The theme is dark garage charcoal with an orange accent. The colors are `garage` and `accent` in `tailwind.config.js`.

## Analytics

Google Analytics is off by default. Set `VITE_GA_ID` in a `.env` file to turn it on.

## Note

The maintenance intervals are general guidance. Always check your owner's manual for your exact vehicle.
