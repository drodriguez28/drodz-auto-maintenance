import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;
let gaReady = false;

export const initializeGA = () => {
  if (!GA_ID) return;
  ReactGA.initialize(GA_ID);
  gaReady = true;
};

export const trackPageView = (path) => {
  if (!gaReady) return;
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

// GA4-native event tracking
export const trackEvent = (eventName, params = {}) => {
  if (!gaReady) return;
  ReactGA.event(eventName, params);
};
