// Samma upplägg som Techknight: GA4-händelser köas om gtag.js inte hunnit laddas.
function queueGtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, transport_type: "beacon", ...params };
  if (typeof window.gtag === "function") window.gtag("event", name, payload);
  else queueGtag("event", name, payload);
}
