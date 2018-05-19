import { Component } from 'react';
import PropTypes from 'prop-types';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getWindowFullStory = () => window[window['_fs_namespace']];

export const FullStoryAPI = (fn, ...args) => {
  if (canUseDOM && getWindowFullStory()) {
    getWindowFullStory().apply(fn, args);
  } else {
    console.warn('FullStory not initialized yet');
  }
};

export default class FullStory extends Component {
  constructor(props) {
    super(props);

    const { org, debug, host, namespace } = props;

    if (!org || !canUseDOM) {
      return;
    }

    if (!getWindowFullStory()) {
      window['_fs_debug'] = debug || false;
      window['_fs_host'] = host || 'fullstory.com';
      window['_fs_org'] = org;
      window['_fs_namespace'] = namespace || 'FS';

      (function(w, d, ns, t, l, o, g, y) {
        if (ns in w) {
          if (w.console && w.console.log) {
            w.console.log(
              'FullStory namespace conflict. Please set window["_fs_namespace"]'
            );
          }
          return;
        }
        g = w[ns] = function(a, b) {
          g.q ? g.q.push([a, b]) : g._api(a, b);
        };
        g.q = [];
        o = d.createElement(t);
        o.async = 1;
        o.src = 'https://' + window['_fs_host'] + '/s/fs.js';
        d.head.appendChild(o);
        g.identify = function(i, v) {
          g(l, { uid: i });
          if (v) g(l, v);
        };
        g.setUserVars = function(v) {
          g(l, v);
        };
        g.shutdown = function() {
          g('rec', !1);
        };
        g.restart = function() {
          g('rec', !0);
        };
        g.consent = function(a) {
          g('consent', !arguments.length || a);
        };
        g.identifyAccount = function(i, v) {
          o = 'account';
          v = v || {};
          v.acctId = i;
          g(o, v);
        };
        g.clearUserCookie = function() {};
      })(window, document, window['_fs_namespace'], 'script', 'user');
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (!canUseDOM || !getWindowFullStory()) return false;

    getWindowFullStory().shutdown();

    delete getWindowFullStory();
  }

  render() {
    return false;
  }
}

FullStory.propTypes = {
  org: PropTypes.string.isRequired
};
