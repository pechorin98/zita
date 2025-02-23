// src/analytics.js
import ReactGA from 'react-ga4';

// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
export const initGA = () => {
  ReactGA.initialize('G-CY1N86K8X4');
  // Optionally, send the first pageview when the app loads
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
