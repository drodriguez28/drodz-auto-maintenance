// Vehicle catalog + maintenance schedule. The data itself lives in ./json/ —
// edit those files to add makes, models or schedule items (see ./json/README.md).
import vehiclesJson from "./json/vehicles.json";
import scheduleJson from "./json/schedule.json";

// { from, to, skip } -> [to, ..., from], newest first
const expandYears = ({ from, to, skip = [] }) =>
  Array.from({ length: to - from + 1 }, (_, i) => to - i).filter((y) => !skip.includes(y));

export const makes = Object.fromEntries(
  Object.entries(vehiclesJson).map(([makeId, make]) => [
    makeId,
    {
      ...make,
      models: Object.fromEntries(
        Object.entries(make.models).map(([modelId, model]) => [
          modelId,
          { ...model, years: expandYears(model.years) },
        ])
      ),
    },
  ])
);

export const getMake = (makeId) => makes[makeId];

export const getModel = (makeId, modelId) => makes[makeId]?.models[modelId];

export const getSchedule = (makeId, modelId) => {
  const model = getModel(makeId, modelId);
  if (!model) return [];
  return [
    ...scheduleJson.base,
    ...(model.hybrid ? scheduleJson.hybrid : []),
    ...(model.fourWheel ? scheduleJson.fourWheel : []),
  ];
};
