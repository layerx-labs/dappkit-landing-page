import React from "react";
import { useEffect } from "react";
import { useExternalScript } from "../utils/use-external-script";
import { useLocation } from "../utils/use-location";

const GOOGLE_ANALYTICS_4_ID = process.env.REACT_APP_GOOGLE_ANALYTCS_4;

function gtag() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(arguments);
}

const GoogleAnalytics4 = () => {
	const location = useLocation();

	const loadGoogleAnalyticsScript = useExternalScript(
		`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_4_ID}`
	);

	useEffect(() => {
		if (loadGoogleAnalyticsScript === "loading") return;

		gtag("js", new Date());

		gtag("config", GOOGLE_ANALYTICS_4_ID, {
			send_page_view: false,
		});
	}, [loadGoogleAnalyticsScript]);

	useEffect(() => {
		// manually track pageviews to support hash and query parameters for Google Analytics
		gtag("event", "page_view", {
			page_path:
				location.pathname + location.search ?? "" + location.hash ?? "",
			page_search: location.search,
			page_hash: location.hash,
		});
	}, [location]);

	return <></>;
};

export default GoogleAnalytics4;
