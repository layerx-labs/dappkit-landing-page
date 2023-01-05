import React from 'react';
import { useEffect } from 'react';
import { useExternalScript, useLocation } from '../../hooks';

import { GoogleTag, pushGoogleAnalyticsEvent } from './utils';

const GOOGLE_ANALYTICS_4_ID = process.env.REACT_APP_GA_ID || 'G-GQSKHBQJ71';

const GoogleAnalytics4 = () => {
  const location = useLocation();

  const loadGoogleAnalyticsScript = useExternalScript(
    `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_4_ID}`,
  );

  useEffect(() => {
    if (loadGoogleAnalyticsScript === 'loading') return;

    GoogleTag('js', new Date());

    GoogleTag('config', GOOGLE_ANALYTICS_4_ID, {
      send_page_view: false,
    });
  }, [loadGoogleAnalyticsScript]);

  useEffect(() => {
    // manually track pageviews to support hash and query parameters for Google Analytics
    pushGoogleAnalyticsEvent('page_view', {
      page_path: location.pathname + location?.search ?? '' + location?.hash ?? '',
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location]);

  return <></>;
};

export default GoogleAnalytics4;
