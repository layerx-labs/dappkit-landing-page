
import React from "react";
import ReactGA from 'react-ga';

class AnalyticsHelper {
  disabled = false;

  init(options) {
    this.disabled = options.disabled || false;
    this.debug =  options.debug || true;
    ReactGA.initialize("G-0QEQV7B4HH", {});
    if (this.debug) {
        console.log(`GA ✅`);    
    }
  }

  pageview(url) {
      if (this.debug) {
        console.log(`Tracking a page View ${url}`);
      }
      if(!this.disabled) {
        ReactGA.pageview(url);
      }
      
  }

  pushEvent(event) {
      if (this.debug) {
        console.log(`Pushing Event to Google Analytics ${JSON.stringify(event)}`);
      }
      if(!this.disabled) {
        ReactGA.event(event);    
      }      
  }

  disable(disableAnalytics) {
    this.disabled = disableAnalytics;
  }
}
const helper = new AnalyticsHelper();
export const AnalyticsContext = React.createContext(helper);

export const useAnalytics = ()=> {    
    const value = React.useContext(AnalyticsContext);  
    return value;
}

export default helper;
