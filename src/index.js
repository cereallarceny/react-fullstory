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
    getWindowFullStory()[fn].apply(null, args);
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

      (function(m, n, e, t, l, o, g, y) {
        if (e in m) {
          if (m.console && m.console.log) {
            m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');
          }
          return;
        }
        g = m[e] = function(a, b, s) {
          g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
        };
        g.q = [];
        o = n.createElement(t);
        o.async = 1;
        o.src = 'https://' + window['_fs_host'] + '/s/fs.js';
        n.head.appendChild(o);
        y = n.getElementsByTagName(t)[0];
        y.parentNode.insertBefore(o, y);
        g.identify = function(i, v, s) {
          g(l, { uid: i }, s);
          if (v) g(l, v, s);
        };
        g.setUserVars = function(v, s) {
          g(l, v, s);
        };
        g.event = function(i, v, s) {
          g('event', { n: i , p: v }, s);
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
