export function GoogleTag() {
  if (process.env.NODE_ENV === 'production' || window === undefined) return [];

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

/**
 *
 * @param {*} eventName the name of the event
 * @param {*} options additional parameters of the event
 * @returns
 */
export const pushGoogleAnalyticsEvent = (eventName, options = {}) =>
  GoogleTag('event', eventName, options);
