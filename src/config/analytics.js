import ReactGA from "react-ga4";

export const initializeGA = () => {
  ReactGA.initialize("G-CLTS8RBNEH");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

// ✅ GA4-native event tracking
export const trackEvent = (eventName, params = {}) => {
  ReactGA.event(eventName, params);
};