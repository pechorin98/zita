// src/GA4AnalyticsTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

function GA4AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview whenever the location changes
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
}

export default GA4AnalyticsTracker;
